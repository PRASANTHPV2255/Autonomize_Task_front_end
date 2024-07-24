import { useContext, useState } from "react"
import { NewContext } from "../TextArea"
import './UserCard.css'
import axios from "axios";
import Repos from "../../Screens/Reops/Repos";

function UserCard() {
  const userData = useContext(NewContext)

  const [repoData, setRepoData] = useState([])
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(userData.repos_url);
      setRepoData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }

  };
  console.log(repoData);

  return (
    <div>
      <div className="user-info-card">
        <div className="user-info-card__image-container">
          <img
            src={userData.avatar_url}
            className="user-info-card__image"
          />
        </div>
        <div className="user-info-card__content">
          <header>
            <div>
              <h4 className="user-info-card__name">
                {userData.login}
              </h4>
              <p>LocationL:{userData.location}</p>
              <a href="#" onClick={handleFetch}>repositories</a>
            </div>
            <button>Followers</button>
          </header>
        </div>
      </div>
        {/* <Repos repos={{ ...repoData }} /> */}
    </div>
  )
}

export default UserCard