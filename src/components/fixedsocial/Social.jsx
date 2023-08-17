import style from "./social.module.css";
import faceboock from "../../assets/Facebook.svg";
import instagram from "../../assets/instagram.svg";
import mesenger from "../../assets/Vector.svg";

const Social = () => {
  return (
    <div className={style.social_fixed}>
    <div className={style.social__board}>
      <div className={style.social__img}>
        <img src={faceboock} alt="" />
      </div>
      <div className={style.social__img}>
        <img src={instagram} alt="" />
      </div>
      <div className={style.social__img}>
        <img src={mesenger} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Social;
