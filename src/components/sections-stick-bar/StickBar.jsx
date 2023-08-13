import "./stickbar.css";

import microbial from "../../assets/microbial.png";
const StickBar = () => {
  return (
    <div className="stick-bar">
      <div className="center">
        <div className="frame">
          <div className="frame-stick">🧬</div>
          <div>
            <p className="text-stick">
              DNA <span id="num"> 104</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">📖 </div>
          <div>
            <p className="text-stick">
              Guides <span id="num"> 33</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🥼 </div>
          <div>
            <p className="text-stick">
              Health <span id="num"> 166</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🎉 </div>
          <div>
            <p className="text-stick">
              Lifestyle<span id="num"> 33</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🧫 </div>
          <div>
            <p className="text-stick">
              Microbiome <span id="num"> 79</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">📰 </div>
          <div>
            <p className="text-stick">
              News <span id="num"> 5</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🥑</div>
          <div>
            <p className="text-stick">
              Nutrition<span id="num"> 166</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🔬 </div>
          <div>
            <p className="text-stick">
              Oncology<span id="num"> 104</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">🥗 </div>
          <div>
            <p className="text-stick">
              Receipts<span id="num"> 5</span>
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="frame-stick">❤️ </div>
          <div>
            <p className="text-stick">
              Reviews<span id="num"> 24</span>
            </p>
          </div>
        </div>
      </div>
   
      <div className="line-gradient">
        <div className="microb">
          <img className="microb-img" src={microbial} alt="Image" />  
        </div>
      </div>
    </div>
  );
};

export default StickBar;
