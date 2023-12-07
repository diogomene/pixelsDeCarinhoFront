import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import fotos from "../../public/fotos.json";
import './Galeria.css';

interface FotoUrl{
  url_foto: string
}

function Galeria() {
   const fotosList : FotoUrl[] = fotos
   return (
    <PageContainer>
      <Paper>
        <div>
          <h2>Galeria de Imagens</h2>
          <div>
            {
              (fotosList).map((foto)=>{
                return(
                  <img className='fotos-evento' src={foto.url_foto}/>
                )
              })
            }
          </div>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Galeria;
