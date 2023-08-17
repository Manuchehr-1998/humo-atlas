import style from "./manage.module.css";
import managephone from "../../assets/managephone.png";
import box from "../../assets/box-en.png";
import managesalat from "../../assets/managesalat.png";

const Manage = () => {
  return (
    <div className={style.mange__container}>
      <div className={style.mange__title}>
        <p className={style.manage__text}>
          Manage your health <span id="with">with Atlas</span> tests
        </p>
      </div>
      <div className={style.cards__manage}>
        <div className={style.cards__boy}>
          <div className={style.name__mange}>
            <h1 className={style.name__manages}>
              <span id={style.dna}>DNA</span>
              <br /> TEST
            </h1>
          </div>
          <div className={style.price__discount}>
            <span className={style.price__nodiscount}>£165 </span>
            <span id={style.discount}>-35%</span>
          </div>
          <div className={style.prices}>
            <p className={style.price}>£99</p>
          </div>
          <div className={style.manage__btns}>
            <button className={style.manage__btn}>Read more</button>
          </div>
        </div>
        <div className={style.cards__salat}>
          <div className={style.name__mange}>
            <h1 id={style.micro}>
              <span id={style.micro}>Microbiome</span>
              <br /> TEST
            </h1>
          </div>
          <div className={style.manage__salat}>
            <img
              src={managesalat}
              className={style.manage__salat__img}
              alt=""
            />
          </div>
          <div className={style.manage__box}>
            <img src={box} className={style.manage__box__img} alt="" />
          </div>
          <div className={style.salat__price__discount}>
            <h1 className={style.salat__price__nodiscount}>£199 </h1>
            <h1 id={style.salat}>-26%</h1>
          </div>
          <div className={style.prices}>
            <p className={style.price}>£139</p>
          </div>
          <div className={style.manage__btns}>
            <button className={style.manage__btn}>Read more</button>
          </div>
        </div>
        <div className={style.cards__phone}>
          <div className={style.phone__name}>
            <h1 className={style.phone__title}>
              Unleash <br /> the potential of your <br />
              <span id={style.phone__dna}>DNA</span>
            </h1>
          </div>
          <div className={style.phone__price__discount}>
            <span className={style.phone__price__nodiscount}>от 8 900 ₽ </span>
            <span id={style.phone__discount}>-35%</span>
            <p className={style.phone__price}>5 000 ₽</p>
          </div>
          <div className={style.phone__img}>
          <img src={managephone} alt="" />
          </div>
          <div className={style.phone__btns}>
            <button className={style.phone__btn}>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
