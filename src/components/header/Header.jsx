import Mask from "../../assets/Mask group.svg";
import Navfixed from "./Navfixed";

import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <Navfixed />
      <div className="item-container">
        <div className="more-item">
          <div className="more-left">
            <div className="more-text-gradient">
              <h1 className="more-text-h1">
                More <span id="answers">answers</span> to your <br />{" "}
                <span id="questions">questions</span> in our blog
              </h1>
            </div>
            <div className="more-text">
              <p className="more-text-sharing">
                Sharing knowledge on how genes, gut bacteria <br /> and
                lifestyle affect your health
              </p>
            </div>
          </div>
          <div className="more-rigth">
            <img src={Mask} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
