import "./urbancard.css";
import microbial1 from "../../assets/microbial-1.png";
import microbial2 from "../../assets/microbial-2.png";
import microbial3 from "../../assets/microbial-3.png";
import microbial4 from "../../assets/microbial-4.png";
import microbial5 from "../../assets/microbial-5.png";
import microbial6 from "../../assets/microbial-6.png";
import { useId } from "react";

const Urbancard = () => {
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
    {
      id: useId(),
      img: microbial3,
      title: "Наследственные заболевания",
      data: "19 марта • 15 мин",
    },
  ];

  const articles = [
    {
      id: useId(),
      number: "01",
      text: "What is a Mediterranean diet and should you try it?",
    },
    {
      id: useId(),
      number: "02",
      text: "Kombucha recipe for dummies: make it, don't buy it!",
    },
    {
      id: useId(),
      number: "03",
      text: "Nailed it: Listen to your gut event",
    },
    {
      id: useId(),
      number: "04",
      text: "What’s the difference between IBS and IBD?",
    },
    {
      id: useId(),
      number: "05",
      text: "New guide to your microbiome test results",
    },
  ];

  return (
    <div className="urban-container">
      <div className="title">
        <h1 className="urban-title">Urban biome project takes us <br /> around Europe</h1>
        <p className="urban-data">5 June • 15 min read</p>
      </div>
      <div className="card-articles">
        <div className="urbancard-container">
          {cards.map((card) => (
            <>
              <div className="card" key={card.id}>
                <img className="card-img" src={card.img} alt="" />
                <div className="container-urban-text">
                  <h4>
                    <b>{card.title}</b>
                  </h4>
                  <p>{card.data}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="top-articles">
          <h1>Top articles</h1>
          <hr />
          {articles.map((articl) => (
            <>
              <div className="articl">
                <p className="articl-number">{articl.number}</p>
                <p className="articl-text">{articl.text}</p>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Urbancard;
