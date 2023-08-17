import { useId } from "react";
import style from "./dna.module.css"

import microbial1 from "../../assets/microbial-1.png";
import microbial2 from "../../assets/microbial-2.png";
import microbial3 from "../../assets/microbial-3.png";
import microbial4 from "../../assets/microbial-4.png";
import microbial5 from "../../assets/microbial-5.png";
import microbial6 from "../../assets/microbial-6.png";
const Dna = () => {
  const cards = [
    {
      id: useId(),
      img: microbial1,
      title: "Ожирение ч. 2: риски, генетика, и лечение",
      data: "9 апреля • 8 мин",
    },
    {
      id: useId(),
      img: microbial2,
      title: "Ожирение ч. 1: причины и степени заболевания",
      data: "19 марта • 15 мин",
    },
    {
      id: useId(),
      img: microbial3,
      title: "Наследственные заболевания",
      data: "5 марта • 15 мин",
    },
    {
      id: useId(),
      img: microbial4,
      title: "Фенилкетонурия или кому нельзя есть много ",
      data: "9 апреля • 8 мин",
    },
    {
      id: useId(),
      img: microbial5,
      title: "Топ-4 продуктов-афродизиаков",
      data: "5 марта • 15 мин",
    },
    {
      id: useId(),
      img: microbial6,
      title: "Почему ДНК-тест сдают один раз в жизни",
      data: "5 марта • 15 мин",
    },
    {
      id: useId(),
      img: microbial1,
      title: "Ожирение ч. 2: риски, генетика, и лечение",
      data: "5 марта • 15 мин",
    },
    {
      id: useId(),
      img: microbial2,
      title: "Ожирение ч. 1: причины и степени заболевания",
      data: "9 апреля • 8 мин",
    },
    
  ];

  return (
    <div className={style.dna}>
      <h1 className={style.dna__title}>Your DNA should know it</h1>
      <div className={style.urbancard__container}>
          {cards.map((card) => (
            <>
              <div className={style.card} key={card.id}>
                <img className={style.card__img} src={card.img} alt="" />
                <div className={style.container__urban__text}>
                  <div className={style.card__title}>
                    <h4 className={style.uraban__card__title}>
                      <b>{card.title}</b>
                    </h4>
                  </div>
                  <p className={style.urban__data__card}>{card.data}</p>
                </div>
              </div>
            </>
          ))}
        </div>
    </div>
  )
}

export default Dna