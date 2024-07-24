
import { useNavigate } from 'react-router-dom';
import './style.css'
function Header() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };
  return (
      <header className="header__container">
        <h3>Autonomize AI Machine Test</h3>
        <button onClick={onClickHandler}>Home</button>
      </header>
  )
}

export default Header