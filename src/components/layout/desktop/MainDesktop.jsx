import { recientes, recomendados, favoritos, escuchado, populares } from "../../../data/mobile/cardMobile"
import Footer from "../Footer"
import SectionMobile from "../../../features/mobile/SectionMobile"

const MainDesktop = () => {
    return (
        <>
            <div className="relative">
                <SectionMobile title="¡Buenos días!" items={recientes} />
                <SectionMobile title="Recomendado" items={recomendados} />
                <SectionMobile title="Tus artistas favoritos" items={favoritos} />
                <SectionMobile title="Escuchado recientemente" items={escuchado} />
                <SectionMobile title="Álbumes y sencillos populares" items={populares} />

                <Footer className ="hidden lg:block" />
                <div className="bg-[#ffffff4c] w-3 h-[67px] rounded-none cursor-pointer absolute top-[-40px] right-[-15px]"></div>
            </div>
        </>
    );
}

export default MainDesktop;