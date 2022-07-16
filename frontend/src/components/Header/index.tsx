import logo from '../../assets/img/logo.svg';
import li from '../../assets/img/li.png';
import './styles.css';

function Header() {
    return (
      <>
      <header>
        <div className="dsmeta-logo-container">
            <img src= {logo} alt="" />
            <h1>DsMeta</h1>
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/aleykson-micael-5118b718a/" target="_blanck"><img src={li} alt="" width= {13} /> Aleykson Micael</a></p>
        </div>
    </header>
    </>
    )
  }
  
  export default Header;