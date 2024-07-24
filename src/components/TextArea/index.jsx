import { createContext, useState } from 'react'
import './style.css'
import axios from 'axios';
import UserCard from '../UserCard/UserCard';


export const NewContext = createContext()
function TextArea() {
 
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }

  };

  return (
    <div className='text_area'>
      <div className='search_area'>
        <div className='text_area_headings'>
          <h2>GitHub Explorer</h2>
          
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={username}
            placeholder='Search user name'
            color='black'
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleFetch}>Search</button>
        </div>
        <div className='repo_data'>
          {userData ? <NewContext.Provider value={userData}>
            <UserCard />
          </NewContext.Provider> : null
          }
        </div>
      </div>
    </div>
  )
}

export default TextArea