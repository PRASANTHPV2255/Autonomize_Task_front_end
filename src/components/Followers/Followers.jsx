import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header";
import "./Follower.css";

function Followers() {
  const location = useLocation();
  const navigate = useNavigate();
  const api = location.state?.apiData; // Access the passed state
  const Name = location.state?.userName;
  const followersCount = location.state?.followerCount;

  const [followersList, setfollwersList] = useState(null);

  useEffect(() => {
    const FetchFollwersApi = async () => {
      try {
        const { data } = await axios.get(api);
        setfollwersList(data);
      } catch (err) {
        alert(err.message);
      }
    };
    FetchFollwersApi();
  }, []);

  return (
    <div className="followers">
      <Header />
      <div className="heading">
        <h2>{Name}' Followers</h2>
        {followersCount !== 0 && <p>Total Followers:{followersCount}</p>}
      </div>
      <div className="friends_List">
        {followersList && followersList.length > 0 ?(
          <div className="followers-list">
            {followersList.map((e) => (
              <div
                className="card_followers"
                key={e.id}
                onClick={() => {
                  navigate("/?username=" + e.login);
                }}
              >
                <div className="card__image-container">
                  <img src={e.avatar_url} alt="img" className="card__image" />
                </div>
                <div className="card__content">
                  <h4 className="card__name">{e.login}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">No followers found.</div>
        )}
      </div>
    </div>
  );
}

export default Followers;
