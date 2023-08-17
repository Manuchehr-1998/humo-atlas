import Mask from "../../assets/Mask group.svg";

import style from "./header.module.css";

const Header = () => {
  
  return (
    <div className={style.nav}>
      
      <div className={style.more__item}>
        <div className={style.more__left}>
          <div className={style.more__text__gradient}>
            <h1 className={style.more__text__h1}>
              More <span id={style.answers}>answers</span> to your <br />
              <span id={style.questions}>questions</span> in our blog
            </h1>
          </div>
          <div className={style.more__text}>
            <p className={style.more__text__sharing}>
              Sharing knowledge on how genes, gut bacteria <br /> and lifestyle
              affect your health
            </p>
          </div>
        </div>
        <div className={style.more__rigth}>
          <img src={Mask} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
