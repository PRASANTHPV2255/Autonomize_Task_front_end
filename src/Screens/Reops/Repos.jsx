
import { useState } from 'react'
import './Repos.css'

function Repos(props) {

  const [Repos, setRepos] = useState([...props])

  console.log('this is repo page', props)

  return (
    <div className="card">
      
      {Repos.map((e)=>(
        <div key={e.id}>
          <p>{e.name}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Repos