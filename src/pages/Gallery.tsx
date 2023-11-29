import Carousel from "react-bootstrap/Carousel";
import Image from "../assets/natal.jpeg";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import "bootstrap/dist/css/bootstrap.css";

function Gallery() {
    return (
        <PageContainer>
            <Paper>
                <div className="af-height-90 af-max-width mx-auto mt-2">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image}
                                alt="First slide"
                            />
                            <Carousel.Caption className="position-absolute">
                                <div className="af-position-lg af-bg-dark-transparent py-3">
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>
                                        sit amet, consectetur adipisicing elit.
                                        Deleniti dignissimos error rem, impedit
                                        saepe dolor veritatis nemo nostrum
                                        aliquid numquam, non blanditiis dicta
                                        ipsa quisquam illo, hic vel est ad.
                                    </p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image}
                                alt="Third slide"
                            />
                            <Carousel.Caption className="position-absolute">
                                <div className="af-position-lg af-bg-dark-transparent py-3">
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>
                                        sit amet, consectetur adipisicing elit.
                                        Deleniti dignissimos error rem, impedit
                                        saepe dolor veritatis nemo nostrum
                                        aliquid numquam, non blanditiis dicta
                                        ipsa quisquam illo, hic vel est ad.
                                    </p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Image}
                                alt="Third slide"
                            />
                            <Carousel.Caption className="position-absolute">
                                <div className="af-position-lg af-bg-dark-transparent py-3">
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>
                                        sit amet, consectetur adipisicing elit.
                                        Deleniti dignissimos error rem, impedit
                                        saepe dolor veritatis nemo nostrum
                                        aliquid numquam, non blanditiis dicta
                                        ipsa quisquam illo, hic vel est ad.
                                    </p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Gallery;
