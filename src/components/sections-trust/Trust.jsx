import { useId } from "react";
import microbial1 from "../../assets/microbial-1.png";

import style from  "./trust.module.css";
const Trust = () => {
  const cards = [
    {
      id: useId(),
      img: microbial1,
      title: "Ожирение ч. 2: риски, генетика, и лечение",
      data: "9 апреля • 8 мин",
    },
    {
      id: useId(),
      img: microbial1,
      title: "Ожирение ч. 2: риски, генетика, и лечение",
      data: "9 апреля • 8 мин",
    },
  ];

  return (
    <div className={style.trust}>
      <div className={style.trust__title}>
        <h1>In gut we trust</h1>
      </div>

      <div className={style.trust__container}>
        {cards.map((card) => (
          <>
            <div className={style.card__trust} key={card.id}>
              <img className={style.card__img__trust} src={card.img} alt="" />
              <div className={style.container__trust__text}>
                <div className={style.card__title__trust}>
                  <h4 className={style.trust__card__title}>
                    <b>{card.title}</b>
                  </h4>
                </div>
                <p className={style.trust__data__card}>{card.data}</p>
              </div>
            </div>
          </>
        ))}
        <div className={style.trust__articles}>
          <div className={style.trust__block1__text}>
            <p className={style.trust__text}>
              What is a Mediterranean diet and should you try it?
            </p>
          </div>
          <div className={style.trust__block2__text}>
            <p className={style.trust__text}>
              Kombucha recipe for dummies: make it, don t buy it!
            </p>
          </div>
          <div className={style.trust__block3__text}>
            <p className={style.trust__text}>Nailed it: Listen to your gut event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
