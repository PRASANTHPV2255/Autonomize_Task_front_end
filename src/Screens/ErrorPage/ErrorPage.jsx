import Header from '../../components/header'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div style={{marginTop:'50px'}}>
      <Header />
      <div className="error-page__container">
        <h2 className="">Oops! Something went wrong...</h2>
        <p>Please try again</p>
        <Link to="/">← Back to home</Link>
      </div>
    </div>
  )
}

export default ErrorPage