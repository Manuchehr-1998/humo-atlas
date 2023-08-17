import style from "./blog.module.css";
import faceboock from "../../assets/faceboock.png";
import instagram from "../../assets/instagram.png";
import maskafooter from "../../assets/maskafooter.png";
import mesangblog from "../../assets/mesengblog.png";
const Blog = () => {
  return (
    <div className={style.blog__contener}>
      <div className={style.cards}>
        <div className={style.community}>
          <div className={style.absolute}>
            <img src={mesangblog} alt="" />
          </div>
          <div className={style.community__text}>
            <h1 className={style.community__title}>
              Join our <br /> community
            </h1>
            <p className={style.community__p}>
              Learn about how your genes, gut bacteria and lifestyle affect your
              health. Stay updated about our new articles, news and get weekly
              editor’s picks.
            </p>
          </div>
          <div className={style.inp__btn}>
            <div>
              <input className={style.inp} type="email" placeholder="Email" />
            </div>

            <div className={style.community__btns}>
              <button className={style.community__btn}>Подписаться</button>
            </div>  
          </div>
          <div className={style.community__check}>
            <input type="checkbox" />
            <p className={style.chek}>Нажимая на кнопку, я соглашаюсь с обработкой персональных данных</p>
          </div>
        </div>
        <div className={style.face__insta}>
          <div className={style.face}>
            <div>
              <img src={faceboock} alt="" />
            </div>
            <div>
              <h1 className={style.face__text}>Follow Atlas on Facebook</h1>
            </div>
            <div className={style.face__btns}>
              <button className={style.manage__btn}>Read more</button>
            </div>
          </div>
          <div className={style.insta}>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <h1 className={style.insta__text}>
                Follow Atlas on <span id={style.inst}>Instagram</span>
              </h1>
            </div>
            <div className={style.face__btns}>
              <button className={style.insta__btn}>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.blog__text}>
        <h1 className={style.text__got}>
          Got a question for the team or an idea for an article? Email{" "}
          <span id={style.email}> blog@atlasbiomed.com</span>{" "}
        </h1>
      </div>
      <div className={style.blog__img}>
        <img src={maskafooter} alt="" />
      </div>
      <div className={style.blog__hr__div}>
        <hr className={style.blog__hr} />
        <hr className={style.blog__hr} />
      </div>
    </div>
  );
};

export default Blog;
