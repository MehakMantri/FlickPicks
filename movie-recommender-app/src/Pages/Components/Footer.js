// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/mehakmantri"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/MehakMantri"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://x.com/itsmehak_527"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    © Developed By Mehak Mantri
                </div>
            </div>
        </footer>
    );
};

export default Footer;
