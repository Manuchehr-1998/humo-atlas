import style from "./free.module.css";
import book from "../../assets/books.png";
const Free = () => {
  return (
    <div className={style.free__contener}>
      <div className={style.free__book}>
        <img src={book} alt="" />
      </div>
      <div className={style.free__title}>
        <h1 className={style.free__title__text}>
          <span id={style.text}>Free</span> Atlas courses
        </h1>
        <p className={style.free__p}>
          Collected the expertise of Atlas scientists and experts into short
          email tutorials. <br /> Subscribe to and find out how digestion works
          and where to start making dietary changes.
        </p>
      <div className={style.btn}>
        <button className={style.free__btn}>All courses</button>
      </div>
      </div>
      <div className={style.cards}>
        <div className={style.card__par}>
          <div className={style.card__girle}>
            <h1 className={style.girle__title}>
              Mindful <br /> course
            </h1>
            <div className={style.data}>
              <p className={style.card__data}>8 lessons • 8 mails</p>
            </div>
          </div>
          <div className={style.card__p}>
            <p>
              Discover how stress impacts your gut health, including its impact
              on microbiome diversity and digestion.
            </p>
          </div>
        </div>
        <div className={style.card__par}>
          <div className={style.card__salat}>
            <h1 className={style.salat__title}>
              Healthy <br /> eating 101
            </h1>
            <div className={style.data}>
              <p className={style.card__data}>8 lessons • 8 mails</p>
            </div>
          </div>
          <div className={style.card__p}>
            <p>We are what we eat. Find out how to eat happily and healthily</p>
          </div>
        </div>
        <div className={style.card__par}>
          <div className={style.card__fruits}>
            <h1 className={style.fruits__title}>
              EAT THE <br />
              <span id={style.rainbow}>RAINBOW</span>
            </h1>
            <div className={style.data}>
              <p className={style.card__data}>8 lessons • 8 mails</p>
            </div>
          </div>
          <div className={style.card__p}>
            <p>
              Put more colour in your diet to achieve a diverse microbial
              community in your gut.
            </p>
          </div>
        </div>
        <div className={style.card__par}>
          <div className={style.card__noutbook}>
            <h1 className={style.noutbook__title}>
              The secret <br /> life of gut <br /> bacteria
            </h1>
            <div className={style.data}>
              <p className={style.card__data}>PDF ebook</p>
            </div>
          </div>
          <div className={style.card__p}>
            <p>
              Learn how to make your gut bacteria happier and how to take care
              of your microbiota.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
