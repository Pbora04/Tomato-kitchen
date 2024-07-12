import { assets } from "../../assets/assets";
import "./Footer.css";

const Foooter = () => {
  return (
    <div className="Footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            choose from a diverse menu featuring a delectable array of dishes
            crafted with finest ingredent and culinary expertise. Our mission is
            to satisfy your craving and evaluate your dining experience,one
            delicious meal at a time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div  className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
            <div  className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>729198796</li>
                    <li>Tomato@gmail.com</li>
                </ul>
            </div>

      </div>
      <hr/>
      <p className="footer-copyright"> Copyright 2024 @Tomato-All Rights Reserve</p>
    </div>
  );
};

export default Foooter;
