import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function AboutUs() {
    return (
        <PageContainer>
            <Paper>
                <div className='aboutUs-container'>
                    <h1>Quem somos nozes?</h1><br />
                    <p>Nós somos uma comunidade formada por amigos apaixonados pela area de tecnologia que se uniram com um proposito nobre:</p>
                    <br />
                    <p>Levar alegria e esperança a crianças carentes em Campo Grande e região.</p>
                    <br />
                    <p>Nossa missão é transformar pixels em sorrisos, arrecadando brinquedos, roupas e material escolar durante todo o ano e entregando em datas especiais. </p>
                    <br />
                    <p>Juntos, somos uma corrente do bem, construindo um futuro mais brilhante, uma doação de cada vez.</p>
                    <br />
                    <p>Faça parte dessa jornada e ajude-nos a colorir o mundo com amor e solidariedade! </p>
                    <br />
                    <p>
                        <strong>#PixelsDeCarinho</strong>
                    </p>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default AboutUs;
