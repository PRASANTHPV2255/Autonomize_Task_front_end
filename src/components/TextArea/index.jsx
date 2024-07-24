import { createContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import { useLocation } from "react-router-dom";

export const NewContext = createContext();
function TextArea() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("username");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    // Reset the username and userData on mount
    setUsername("");
    setUserData(null);
    setRepoData(null);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${name}`
        );
        setUserData(data);
        setRepoData(null);
      } catch (err) {
        if (userData === null) {
          alert("user name is incorrect");
        } else {
          alert(err.message);
          setUserData(null);
          setRepoData(null);
        }
      }
    };
  
    if (name){
      setUsername(name);
      fetchData();
    } else{
      setUserData(null)
      setUsername('')
      setRepoData(null)
    }

  }, [name]);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(data);
      setRepoData(null);
    } catch (err) {
      if (userData === null) {
        alert("user name is incorrect");
      } else {
        alert(err.message);
        setUserData(null);
        setRepoData(null);
      }
    }
  };

  return (
    <div className="text_area">
      <div className="search_area">
        <div className="text_area_headings">
          <h2>GitHub Explorer</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={username}
            placeholder="Search user name"
            color="black"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleFetch}>Search</button>
        </div>
      </div>
      <div className="repo_data">
        {userData ? (
          <NewContext.Provider value={userData}>
            <UserCard repoData={repoData} setRepoData={setRepoData} />
          </NewContext.Provider>
        ) : null}
      </div>
    </div>
  );
}

export default TextArea;
