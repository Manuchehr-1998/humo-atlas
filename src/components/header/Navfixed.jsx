import Atlas from "../../assets/atlas-header.svg";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Profile from "../../assets/Profile.svg";
import Group from "../../assets/Group 48948.svg";
import Navigation from "../../assets/navigation-close-icon.svg";
import microbibtn from "../../assets/microbiome-kit.png";
import search from "../../assets/serach.svg";
import searchx from "../../assets/seatchx.svg";
import mobilef from "../../assets/mobile-face.svg";
import mobileinst from "../../assets/mobile-insta.svg";
import mobilemess from "../../assets/mobile-messenge.svg";
import { useEffect, useState } from "react";
import style from "./navfixed.module.css";

// eslint-disable-next-line react/prop-types
const Navfixed = ({ sticky }) => {
  const initialCloseValue = JSON.parse(localStorage.getItem("close"));
  const [close, setClose] = useState(initialCloseValue);

  // Установить значение close в localStorage при изменении close
  useEffect(() => {
    localStorage.setItem("close", JSON.stringify(close));
  }, [close]);

  // Обработчик клика для изменения значения close
  const handleClick = () => {
    setClose(!close);
  };
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${sticky} ? ${style.sticky} : ""`}>
      {close ? (
        <div className={style.nav}>
          <div className={style.nav__atlas__header}>
            <div className={style.nav__atlas__img}>
              <img
                className={style.nav__atlas__header__img}
                src={Atlas}
                alt=""
              />
            </div>
            <div className={style.nav__text__header__m}>
              <p className={style.nav__text__header}>
                <b>-40% OFF Sale</b> on Atlas tests with promo code atlas2023
              </p>
            </div>
            <div className={style.nav__btn}>
              <button className={style.nav__btn__bye}>Bye now</button>
            </div>
          </div>
          <div className={style.nav__navigation}>
            <button className={style.btn__navigator__x} onClick={handleClick}>
              <img src={Navigation} alt="" />
            </button>
          </div>
        </div>
      ) : null}

      {!sticky ? (
        <div className={style.nav__search}>
          <div className={style.nav__center}>
            <div className={style.nav__left}>
              <div>
                <img src={Logo} alt="" />
              </div>
              <div className={style.item__nav}>
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
            <div className={style.nav__rigth}>
              <div className={style.nav__cart}>
                <img src={Cart} alt="" />
              </div>
              <div className={style.nav__profile}>
                <img src={Profile} alt="" />
              </div>
              <div>
                <img src={Group} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.nev__search}>
          <div className={style.center}>
            <div className={style.nev__left}>
              <div>
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className={style.nav_input}>
              <div className={style.nav__absolute}>
                <img src={search} alt="" />
              </div>
              <div className={style.nav__inp__div}>
                <input
                  type="search"
                  className={style.inp}
                  required
                  placeholder="Search"
                />
              </div>
              <div className={style.nav__navigation}>
                <button className={style.btn__navigator__x__m}>
                  <img src={searchx} alt="" className={style.btn__m} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={style.wrapper__burger}>
        <div className={style.new__div}>
          <div
            className={`${style.burger__btn} ${isActive ? style.active : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={style.logo__Group}>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <img src={Group} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`${style.burger__menu} ${isActive ? style.active : ""}`}
        >
          <nav className={style.mobile__nav}>
            <ul>
              <li>DNA</li>
              <li>Microbiome</li>
              <li>Partner with us</li>
              <li>About Atlas</li>
              <li>FAQ</li>
              <li>Upload</li>
            </ul>
          </nav>
          <div className={style.new__btn}>
            <button className={style.new__btn__test}>
              Buy test <img src={microbibtn} alt="" />
              <img src={microbibtn} alt="" />
            </button>
          </div>
          <div className={style.nav__rigth__mobile}>
            <div>
              <img src={mobilef} alt="" />
            </div>
            <div>
              <img src={mobileinst} alt="" />
            </div>
            <div>
              <img src={mobilemess} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navfixed;
