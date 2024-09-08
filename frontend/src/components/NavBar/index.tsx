import ImgLogo from "../../assets/images/ImgLogoPNG.png";
import "./styles.css";
function NavBar() {
  return (
    <div className="d-flex flex-column p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 mr-md-3 texttfc">
          <span>The</span>
          <img src={ImgLogo} alt="" />
          <span>Festival</span>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
