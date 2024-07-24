import { createContext, useContext, useState } from "react";
import { NewContext } from "../TextArea";
import "./UserCard.css";
import axios from "axios";
import Repos from "../../Screens/Repos/Repos";
import { useNavigate } from "react-router-dom";

export const contextRepos = createContext();

function UserCard({ setRepoData, repoData }) {
  const navigate = useNavigate();
  const userData = useContext(NewContext);
  

  const [loading, setLoading] = useState(false); // Loading state

  const handleFetch = async () => {
    setLoading(true); // Set loading to true before the request
    try {
      const { data } = await axios.get(userData.repos_url);
      setRepoData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  function followerList() {
    navigate("/followers", {
      state: {
        apiData: userData.followers_url,
        userName: userData.login,
        followerCount: userData.followers,
      },
    });
  }

  return (
    <div className="User_and_repositories">
      <div className="user-info-card">
        <div className="user-info-card__image-container">
          <img
            src={userData.avatar_url}
            className="user-info-card__image"
            alt="User Avatar"
          />
        </div>
        <div className="user-info-card__content">
          <header>
            <div>
              <h4 className="user-info-card__name">{userData.login}</h4>
              <p>Location: {userData.location}</p>
              <a href="#" onClick={handleFetch}>
                Repositories
              </a>
            </div>
            <button onClick={followerList}>Followers</button>
          </header>
        </div>
      </div>

      {loading ? (
        <div className="spinner"></div> // Display a loader while loading
      ) : (
        repoData && (
          <div className="repositories">
            <contextRepos.Provider value={repoData}>
              <Repos />
            </contextRepos.Provider>
          </div>
        )
      )}
    </div>
  );
}

export default UserCard;
