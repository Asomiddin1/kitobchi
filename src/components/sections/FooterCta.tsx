"use client"

import AppStoreButton from "../AppStoreBtn"
import PlayStoreButton from "../PlayStoreButton"

const FooterCTA = () => {
  return (
    <>
      <style>{`
        .footer-cta-section { background: #111; color: #fff; padding-top: 100px; text-align: center; }
        .cta-container { max-width: 800px; margin: 0 auto; padding: 0 24px 80px; }
        .cta-headline { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
        .cta-sub { color: #aaa; font-size: 1.1rem; margin-bottom: 40px; }
        .store-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
        .store-btn { display: flex; align-items: center; gap: 10px; background: #fff; color: #111; border: none; padding: 14px 28px; border-radius: 999px; cursor: pointer; font-family: inherit; font-weight: bold; transition: transform 0.2s; }
        .store-btn:hover { transform: scale(1.05); }
        .store-btn .small { font-size: 0.65rem; display: block; opacity: 0.8;}
        .store-btn .big { font-size: 1rem; display: block; }
        
        .main-footer { border-top: 1px solid #333; padding: 40px 24px; text-align: left; }
        .footer-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; }
        .footer-logo { font-size: 1.5rem; font-weight: 800; margin-bottom: 15px; }
        .footer-links h4 { color: #fff; margin-bottom: 15px; }
        .footer-links ul { list-style: none; padding: 0; }
        .footer-links li { margin-bottom: 10px; }
        .footer-links a { color: #aaa; text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: #fff; }
        .copyright { text-align: center; color: #666; margin-top: 40px; font-size: 0.9rem; }
      `}</style>

      <footer className="footer-cta-section">
        <div className="cta-container">
          <h2 className="cta-headline">O'z kutubxonangizni<br/>hoziroq yarating!</h2>
          <p className="cta-sub">Kitobchi ilovasini bepul yuklab oling va mutolaadan zavq oling.</p>
          
          <div className="store-btns">
                <AppStoreButton />
                <PlayStoreButton />
          </div>
        </div>

        <div className="main-footer">
          <div className="footer-content">
            <div>
              <div className="footer-logo">Kitobchi.</div>
              <p style={{color: "#aaa", maxWidth: "300px"}}>O'zbekistondagi barcha kitob do'konlari bitta ilovada.</p>
            </div>
            <div className="footer-links">
              <h4>Ijtimoiy tarmoqlar</h4>
              <ul>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Ma'lumotlar</h4>
              <ul>
                <li><a href="#">Maxfiylik siyosati</a></li>
                <li><a href="#">Foydalanish shartlari</a></li>
                <li><a href="#">Aloqa: +998 90 123 45 67</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Kitobchi. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterCTA