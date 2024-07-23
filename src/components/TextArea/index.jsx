import './style.css'

function Index() {
  return (
    <div className='text_area'>
      <div className='text_area_headings'>
        <h2>GitHub Explorer</h2>
        <p>Search username here</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder='Search'
          color='black'
        />
        <button type="submit">Search</button>
      </div>
    </div>
  )
}

export default Index