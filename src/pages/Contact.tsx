import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import './Contact.css';

function Contact() {
    return (
        <PageContainer>
            <Paper>
                <div className="contact">
                    <h4>Entre em contato conosco!</h4>
                    <br />
                    <p>
                        Instagram:{" "}
                        <strong>
                            <a href="https://www.instagram.com/pixelsdecarinho/">
                                @pixelsdecarinho
                            </a>
                        </strong>
                    </p>
                    <br />
                    <p>
                        Facebook:{" "}
                        <strong>
                            <a href="https://www.facebook.com/pixelsdecarinho/">
                                @pixelsdecarinho
                            </a>
                        </strong>
                    </p>
                    <br />
                    <p>
                        E-mail:{" "}
                        <strong>
                            <a href="mailto:pixelsdecarinho@gmail.com">
                                pixelsdecarinho@gmail.com
                            </a>
                        </strong>
                    </p>

                    <br />
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Contact;
