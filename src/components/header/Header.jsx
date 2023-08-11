import Atlas from "../../assets/atlas-header.svg";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Profile from "../../assets/Profile.svg";
import Group from "../../assets/Group 48948.svg";
import Navigation from "../../assets/navigation-close-icon.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-atlas-header">
          <div className="nav-atlas-img">
            <img className="nav-atlas-header-img" src={Atlas} alt="" />
          </div>
          <div>
            <p className="nav-text-header">
              <b>-40% OFF Sale</b> on Atlas tests with promo code atlas2023
            </p>
          </div>
          <div className="nav-btn">
            <button className="nav-btn-bye">Bye now</button>
          </div>
        </div>
        <div className="nav-navigation">
          <img src={Navigation} alt="" />
        </div>
      </div>
      <div className="nav-container">
      <div className="nav-search">
        <div className="nav-left">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="item-nav">
            <ul>
              <li>DNA</li>
              <li>Microbiome</li>
              <li>Partner with us</li>
              <li>About Atlas</li>
              <li>FAQ</li>
              <li>Upload</li>
            </ul>
          </div>
        </div>
        <div className="nav-rigth">
          <div className="">
            <img src={Cart} alt="" />
          </div>
          <div>
            <img src={Profile} alt="" />
          </div>
          <div>
            <img src={Group} alt="" />
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Header;
