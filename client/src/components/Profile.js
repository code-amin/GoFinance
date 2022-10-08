import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// require("dotenv").config();

// const { REACT_APP_UPLOAD_PRESET } = process.env;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [favourites, setFavourites] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://as1.ftcdn.net/v2/jpg/02/18/23/02/1000_F_218230230_OdCO2XyeMsH3ica7Um99uIeMnTFGyibC.jpg"
  );
  const [previewSource, setPreviewSource] = useState("");
  // console.log(user);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleSubmitFile = (event) => {
    event.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    const { email } = user;

    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage, email: email }),
        headers: { "Content-type": "application/json" },
      });
      const data = await response.json();

      setProfilePicture(data.profile_url);
      alert("changes saved");
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchFavourite = async () => {
  //   if (isAuthenticated) {
  //     const { email } = user;
  //     const fetchResult = await fetch(`/api/get-favourites/${email}`);
  //     const parsedResult = await fetchResult.json();

  //     setFavourites(parsedResult.data);
  //   }
  // };
  // console.log(user);
  if (!favourites) {
    const fetchFavourite = async () => {
      try {
        if (isAuthenticated) {
          const { email } = user;
          const fetchResult = await fetch(`/api/get-favourites/${email}`);
          const parsedResult = await fetchResult.json();

          setFavourites(parsedResult.data ?? []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setDataIsLoading(false);
      }
    };
    fetchFavourite();
  }

  return (
    isAuthenticated && (
      <>
        <UserData>
          <form onSubmit={handleSubmitFile} className="form">
            <h2>Your profile</h2>
            {profilePicture && (
              <>
                <Img src={profilePicture} />
              </>
            )}
            <input
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className="form-input"
            />
            <button className="btn" type="submit">
              Save
            </button>
            <h3>Username:</h3> {user.name}
            <h3>Email:</h3> {user.email}
          </form>
          {/* {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
        )} */}
        </UserData>
        <FavouritesDiv>
          {favourites && (
            <>
              {favourites?.map((favourite) => {
                return (
                  <Favourites to={`/stock/${favourite}`}>
                    {favourite}
                  </Favourites>
                );
              })}
            </>
          )}
        </FavouritesDiv>
      </>
    )
  );
};

export default Profile;

const UserData = styled.div`
  margin: 20px auto;
  display: block;
  width: 250px;
  text-align: center;
  border: 1px solid var(--color-beige);
  border-radius: 10px;
`;
const Img = styled.img`
  border-radius: 50%;
  margin: 20px auto;
  display: block;
  width: 100px;
  height: 100px;
`;

const FavouritesDiv = styled.div`
  border: 1px solid red;
  display: grid;
`;
const Favourites = styled(Link)`
  padding: 3px;
`;
