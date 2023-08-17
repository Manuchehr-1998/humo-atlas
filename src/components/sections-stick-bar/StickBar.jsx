import style from  "./stickbar.module.css";

import microbial from "../../assets/microbial.png";
const StickBar = () => {
  return (
    <div className={style.stick__bar}>
      <div className={style.center}>
        <div className={style.frame}>
          <div className={style.frame__stick}>🧬</div>
          <div>
            <p className={style.text__stick}>
              DNA <span id={style.num}> 104</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>📖 </div>
          <div>
            <p className={style.text__stick}>
              Guides <span id={style.num}> 33</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🥼 </div>
          <div>
            <p className={style.text__stick}>
              Health <span id={style.num}> 166</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🎉 </div>
          <div>
            <p className={style.text__stick}>
              Lifestyle<span id={style.num}> 33</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🧫 </div>
          <div>
            <p className={style.text__stick}>
              Microbiome <span id={style.num}> 79</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>📰 </div>
          <div>
            <p className={style.text__stick}>
              News <span id={style.num}> 5</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🥑</div>
          <div>
            <p className={style.text__stick}>
              Nutrition<span id={style.num}> 166</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🔬 </div>
          <div>
            <p className={style.text__stick}>
              Oncology<span id={style.num}> 104</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>🥗 </div>
          <div>
            <p className={style.text__stick}>
              Receipts<span id={style.num}> 5</span>
            </p>
          </div>
        </div>
        <div className={style.frame}>
          <div className={style.frame__stick}>❤️ </div>
          <div>
            <p className={style.text__stick}>
              Reviews<span id={style.num}> 24</span>
            </p>
          </div>
        </div>
      </div>
   
      <div className={style.line__gradient}>
        <div className={style.microb}>
          <img className={style.microb__img} src={microbial} alt="Image" />  
        </div>
      </div>
    </div>
  );
};

export default StickBar;
