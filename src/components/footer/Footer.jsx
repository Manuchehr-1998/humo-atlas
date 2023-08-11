import "./footer.css";
import faceboock from "../../assets/Facebook.svg";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-text">
          <p className="atlas-biomed">
            Atlas Biomed Group Limited <br /> Interchange House, Office 1.58,
            81-85 <br />
            Station Road,Croydon, CR0 2AJ, <br /> United Kingdom <br /> Customer
            Care <br />
            Contact:hello@atlasbiomed.co.uk
          </p>
        </div>
        <div className="footer-social">
          <div className="footer-socials">
            <img src={instagram} alt="" />
          </div>
          <div className="footer-socials">
            <img src={faceboock} alt="" />
          </div>
        </div>
        <div className="contact">
          <p>© 2023 Atlas Biomed Group Limited. <br /> All rights reserved.</p>
        </div>
      </div>
      <div className="footer-rigth">
        <div>
          <p className="atlas-biomed-rigth">About Atlas </p>
          <p className="atlas-biomed-rigth">Contacts </p>
          <p className="atlas-biomed-rigth">FAQ </p>
          <p className="atlas-biomed-rigth">Partner with us</p>
          <p className="atlas-biomed-rigth">Educational hub</p>
          <p className="atlas-biomed-rigth">Blog</p>
        </div>
        <div>
          <p className="atlas-biomed-rigth">Privacy Policy</p>
          <p className="atlas-biomed-rigth">Terms and Conditions </p>
          <p className="atlas-biomed-rigth">Cookie Policy </p>
          <p className="atlas-biomed-rigth">Healthy eating course</p>
          <p className="atlas-biomed-rigth">Eat the rainbow</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
