import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const fetchFavourite = async () => {
    if (isAuthenticated) {
      const { email } = user;
      const fetchResult = await fetch(`/api/get-favourites/${email}`);
      const parsedResult = await fetchResult.json();

      console.log(parsedResult);
    }
  };
  fetchFavourite();
  console.log(user);

  return (
    isAuthenticated && (
      <div>
        Profile Picture: <img src={user.picture} alt={user.name} />
        <h2>Username: {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};

export default Profile;
