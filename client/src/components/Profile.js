import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";

// require("dotenv").config();

// const { REACT_APP_UPLOAD_PRESET } = process.env;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [fileInputState, setFileInputState] = useState("");
  const [profilePicture, setProfilePicture] = useState(user.picture);
  const [previewSource, setPreviewSource] = useState("");
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
  console.log(user);
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

  return (
    isAuthenticated && (
      <Wrapper>
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
            <Username>
              Username: <Content>{user.name}</Content>
            </Username>
            <Username>
              Email: <Content>{user.email}</Content>
            </Username>
          </form>
        </UserData>
      </Wrapper>
    )
  );
};

export default Profile;

const FavouriteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  border-radius: 50%;
  margin: 20px auto;
  display: block;
  width: 100px;
  height: 100px;
`;
const UserData = styled.div`
  margin: 20px auto;
  display: flex;
  width: 500px;
  text-align: center;
  border: 1px solid var(--color-beige);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Username = styled.div`
  display: flex;
  font-weight: bold;
  padding: 7px;
`;

const FavouritesDiv = styled.div`
  display: flex;
  color: var(--color-blue);
`;
const Favourites = styled(Link)`
  font-size: 16px;
  display: grid;
`;
const FavHeader = styled.div`
  font-size: 25px;
`;

const Content = styled.div`
  font-weight: normal;
  padding-left: 6px;
`;
