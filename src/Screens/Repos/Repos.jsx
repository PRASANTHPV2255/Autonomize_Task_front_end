import { useContext } from 'react'
import './Repos.css'
import { contextRepos } from '../../components/UserCard/UserCard'

function Repos() {
  const repos = useContext(contextRepos)

  return (
    <div className='repositries'>
      <h3 >repositories</h3>
      <div className="repositories-list">
        {
          repos.map((e) => (
            <div className="card" key={e.id}>
              <div className="card__image-container">
                <img src={e.owner
                  .avatar_url} alt='img' className="card__image" />
              </div>
              <div className="card__content">
                <h4 className="card__name">{e.name}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Repos

