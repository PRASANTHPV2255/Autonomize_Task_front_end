import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import './Follower.css'


function Followers() {
  const location = useLocation();
  const api = location.state?.apiData; // Access the passed state
  const Name = location.state?.userName
  const followersCount = location.state?.followerCount

  const [followersList, setfollwersList] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchFollwersApi = async () => {
      try {
        const { data } = await axios.get(api);
        setfollwersList(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        // alert(err)
      }
    };
    FetchFollwersApi()
    console.log(Name);
    console.log(followersCount);
  }, [])

  console.log(followersList);

  // if(followersList){
  //   followersList.map((e)=>
  //     {

  //       console.log(e?.login)
  //       console.log(e?.avatar_url);

  // })
  // }


  return (
    <div className="followers">
      <Header />
      <div className="heading">
        <h2 >{Name}' Followers</h2>
        <p>Total Followers:{followersCount}</p>
      </div>
      <div className="friends_List">
        {
          followersList ? <div className="repositories-list">{followersList.map((e) => (
            <div className="card" key={e.id}>
              <div className="card__image-container">
                <img src={e.avatar_url} alt='img' className="card__image" />
              </div>
              <div className="card__content">
                <h4 className="card__name">{e.login}</h4>
              </div>
            </div>
          ))}</div> : null
        }
      </div>
    </div>
  )
}

export default Followers