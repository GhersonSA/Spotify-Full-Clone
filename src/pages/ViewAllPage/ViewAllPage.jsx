import { useLocation } from 'react-router-dom';
import CardDesktop from '../../components/ui/desktop/CardDesktop';
import { recientes, recomendados, favoritos, escuchado, populares } from '../../data/cardMain';

const ViewAllPage = () => {
    const { state } = useLocation();
    const { title} = state || {};

    const getItems = () => {
        switch(title) {
            case "Creado por GhersonSA":
                return recientes;
            case "Recomendado":
                return recomendados;
            case "Tus artistas favoritos":
                return favoritos;
            case "Escuchado recientemente":
                return escuchado;
            case "Álbumes y sencillos populares":
                return populares;
            default:
                return [];
        }
    };

    return (
        <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                {getItems().map((item, index) => (
                    <CardDesktop 
                        key={`${item.type}-${item.id}-${index}`}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default ViewAllPage;