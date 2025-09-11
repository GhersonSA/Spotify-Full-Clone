import { recientes, recomendados, favoritos, escuchado, populares } from "../../../data/mobile/cardMobile"
import Footer from "../Footer"
import SectionMobile from "../../../features/mobile/SectionMobile"

const MainDesktop = () => {
    return (
        <>
            <div className="p-4 text-white text-[20px] lg:bg-bg-secondary">
                <SectionMobile title="¡Buenos días!" items={recientes} />
                <SectionMobile title="Recomendado" items={recomendados} />
                <SectionMobile title="Tus artistas favoritos" items={favoritos} />
                <SectionMobile title="Escuchado recientemente" items={escuchado} />
                <SectionMobile title="Álbumes y sencillos populares" items={populares} />

                <Footer className ="hidden lg:block" />
            </div>
        </>
    );
}

export default MainDesktop;