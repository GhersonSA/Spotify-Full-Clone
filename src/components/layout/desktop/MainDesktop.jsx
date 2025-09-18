import { recientes, recomendados, favoritos, escuchado, populares } from "../../../data/mobile/cardMobile"
import Footer from "../Footer"
import SectionMobile from "../../../features/mobile/SectionMobile"
import PlayIcon from "../../../assets/icons/PlayIcon";
import MiniCardMain from "../../ui/desktop/MiniCardMain";

const MainDesktop = () => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 h-[272px] bg-gradient-to-b from-blue-500/20 to-bg-secondary/10"></div>
            <div className="relative">        
                <div className="py-1 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="pb-1 px-3 rounded-full bg-white hover:bg-bg-mini-card-hover transition-colors duration-200 ease-in-out cursor-pointer">
                            <span className="text-sm font-medium text-black">Todo</span>
                        </div>
                        <div className="pb-1 px-3 rounded-full bg-bg-mini-card hover:bg-bg-mini-card-hover transition-colors duration-200 ease-in-out cursor-pointer">
                            <span className="text-sm font-medium">Música</span>
                        </div>
                        <div className="pb-1 px-3 rounded-full bg-bg-mini-card hover:bg-bg-mini-card-hover transition-colors duration-200 ease-in-out cursor-pointer">
                            <span className="text-sm font-medium">Ártistas</span>
                        </div>
                    </div>
                </div>
                <section className="flex flex-col relative mb-4">
                    <div className="grid gap-2 w-full grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
                        <MiniCardMain img="/images/Feid.webp" nombre="Feid" />
                        <MiniCardMain img="/images/Top-Hits.webp" nombre="Top Hits" />
                        <MiniCardMain img="/images/This-Is-Maluma.webp" nombre="This Is Maluma" />
                        <MiniCardMain img="/images/DuaLipa.webp" nombre="Dua Lipa" />
                        <MiniCardMain img="/images/This-Is-Marshmello.webp" nombre="This Is Marshmello" />
                    </div>
                </section>
                <SectionMobile title="Creado por GhersonSA" items={recientes} />
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