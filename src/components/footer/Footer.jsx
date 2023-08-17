import style from "./footer.module.css";
import faceboock from "../../assets/Facebook.svg";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__left}>
        <div className={style.footer__text}>
          <p className={style.atlas__biomed}>
            Atlas Biomed Group Limited <br /> Interchange House, Office 1.58,
            81-85 <br />
            Station Road,Croydon, CR0 2AJ, <br /> United Kingdom <br /> Customer
            Care <br />
            Contact:hello@atlasbiomed.co.uk
          </p>
        </div>
        <div className={style.footer__social}>
          <div className={style.footer__socials}>
            <img src={instagram} alt="" />
          </div>
          <div className={style.footer__socials}>
            <img src={faceboock} alt="" />
          </div>
        </div>
        <div className={style.contact}>
          <p>© 2023 Atlas Biomed Group Limited. <br /> All rights reserved.</p>
        </div>
      </div>
      <div className={style.footer__rigth}>
        <div>
          <p className={style.atlas__biomed__rigth}>About Atlas </p>
          <p className={style.atlas__biomed__rigth}>Contacts </p>
          <p className={style.atlas__biomed__rigth}>FAQ </p>
          <p className={style.atlas__biomed__rigth}>Partner with us</p>
          <p className={style.atlas__biomed__rigth}>Educational hub</p>
          <p className={style.atlas__biomed__rigth}>Blog</p>
        </div>
        <div>
          <p className={style.atlas__biomed__rigth}>Privacy Policy</p>
          <p className={style.atlas__biomed__rigth}>Terms and Conditions </p>
          <p className={style.atlas__biomed__rigth}>Cookie Policy </p>
          <p className={style.atlas__biomed__rigth}>Healthy eating course</p>
          <p className={style.atlas__biomed__rigth}>Eat the rainbow</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
