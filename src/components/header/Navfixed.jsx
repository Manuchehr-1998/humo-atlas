import "./navfixed.css"
import Atlas from "../../assets/atlas-header.svg";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Profile from "../../assets/Profile.svg";
import Group from "../../assets/Group 48948.svg";
import Navigation from "../../assets/navigation-close-icon.svg";
import faceboock from "../../assets/Facebook.svg";
import instagram from "../../assets/instagram.svg";
import mesenger from "../../assets/Vector.svg";
import "./header.css";
import { useEffect, useState } from "react";
const Navfixed = () => {
    const initialCloseValue = JSON.parse(localStorage.getItem("close")) || true;
    const [close, setClose] = useState(initialCloseValue);
  
    // Установить значение close в localStorage при изменении close
    useEffect(() => {
      localStorage.setItem("close", JSON.stringify(close));
    }, [close]);
  
    // Обработчик клика для изменения значения close
    const handleClick = () => {
      setClose(!close);
    };
  
    // Сохранение значения close в localStorage при закрытии страницы или обновлении
    useEffect(() => {
      const handleBeforeUnload = () => {
        localStorage.setItem("close", JSON.stringify(close));
      };
  
      const handleUnload = () => {
        localStorage.setItem("close", JSON.stringify(close));
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("unload", handleUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("unload", handleUnload);
      };
    }, [close]);
  
    // Обработчик обновления страницы
    const handleBeforeReload = () => {
      localStorage.setItem("close", JSON.stringify(close));
    };
  
    // Добавляем обработчик для события обновления страницы
    window.onbeforeunload = handleBeforeReload;
  
    // Возвращаемся обратно после обработки события
    window.onbeforeunload = null;
  return (
    <div className="nav-container">
         {close ? (
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
            <button className="btn-navigator-x" onClick={handleClick}>
              <img src={Navigation} alt="" />
            </button>
          </div>
        </div>
      ) : null}
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
        <div className="social-board">
        <div className="social-img">
          <img src={faceboock} alt="" />
        </div>
        <div className="social-img">
          <img src={instagram} alt="" />
        </div>
        <div className="social-img">
          <img src={mesenger} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navfixed