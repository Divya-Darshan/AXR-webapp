import './foot.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaDiscord ,FaTelegramPlane  } from 'react-icons/fa';

function Foot() {
  return (
    <>

    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-brand">
          <h2>AnimeExplainer</h2>
          <p>Your gateway to deep anime breakdowns and episode explorations. Powered by passion.</p>
        </div>



        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="https://youtube.com/@theanimeexplainer2-og?si=0W5xyKt3O3cXKSbT" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/the_anime_explainer?igsh=MTdkeDFkMHExYTRycA==" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="mailto:sooryac022@gmail.com" title="Email"><FaEnvelope /></a>
            <a href="https://t.me/the_anime_explainer" target="_blank" rel="noreferrer" title="Telegram"><FaTelegramPlane /></a>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AnimeVerse. All rights reserved.</p>
        <p className="disclaimer">
          This website is fan-made and shares anime episode breakdowns for educational and entertainment purposes only.
          Reproduction or redistribution of any content without permission is strictly prohibited.
        </p>
      </div>
    </footer>
    </>
  );
}

export default Foot;
