import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

function Contact() {
    return (
        <PageContainer>
            <Paper>
                <div className="contact">
                    <h2>Entre em contato conosco!</h2>
                    <br />
                    <p>Siga-nos nas redes sociais:</p>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/pixelsdecarinho/"
                            className="icon-link"
                        >
                            <FaInstagram className="icon" />
                        </a>
                        <a
                            href="https://www.facebook.com/pixelsdecarinho/"
                            className="icon-link"
                        >
                            <FaFacebook className="icon" />
                        </a>
                    </div>
                    <p>Envie-nos um e-mail:</p>
                    <div className="email">
                        <MdEmail className="email-icon" />
                        <a
                            href="mailto:pixelsdecarinho@gmail.com"
                            className="email-link"
                        >
                            pixelsdecarinho@gmail.com
                        </a>
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Contact;
