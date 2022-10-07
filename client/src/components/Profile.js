import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState } from "react";
// require("dotenv").config();

// const { REACT_APP_UPLOAD_PRESET } = process.env;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
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

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const handleSubmitFile = (event) => {
    event.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/update-profile", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFavourite = async () => {
    if (isAuthenticated) {
      const { email } = user;
      const fetchResult = await fetch(`/api/get-favourites/${email}`);
      const parsedResult = await fetchResult.json();

      // console.log(parsedResult);
    }
  };
  fetchFavourite();
  // console.log(user);

  return (
    isAuthenticated && (
      <UserData>
        <form onSubmit={handleSubmitFile} className="form">
          Profile Picture: <Img src={user.picture} alt={user.name} />
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <button className="btn" type="submit">
            Submit
          </button>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
        )}
      </UserData>
    )
  );
};

export default Profile;

const UserData = styled.div`
  text-align: center;
  flex-direction: column;
`;
const Img = styled.img`
  border-radius: 100px;
`;
