import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import fotos from "../../public/fotos.json";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Galeria.css";

interface FotoUrl {
    url_foto: string;
}

function Galeria() {
    const fotosList: FotoUrl[] = fotos;
    const galleryPhotoList : ReactImageGalleryItem[] = fotosList.map((foto) => {
        return {
            original: foto.url_foto,
            thumbnail: foto.url_foto
        }
    });
    return (
        <PageContainer>
            <Paper>
                <div className="image-gallery-page-container">
                    <h2>Galeria de Imagens</h2>
                    <div className="image-gallery-container">
                        <ImageGallery items={galleryPhotoList} infinite={true} lazyLoad={true}/>
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Galeria;
