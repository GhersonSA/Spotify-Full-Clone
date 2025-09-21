import { useState } from "react";
import { recientes, recomendados, favoritos, escuchado, populares } from "../../../data/cardMain";
import SectionDesktop from "../../../features/desktop/SectionDesktop";
import MiniCardMain from "../../ui/desktop/MiniCardMain";
import ButtonType from "../../ui/ButtonType";
import CardDesktop from "../../ui/desktop/CardDesktop";
import Footer from "../Footer";
import PreviewModal from "../../ui/desktop/PreviewModal";

const MainDesktop = () => {
    /* PARA ACTIVAR PRUEBA MODAL
    const [previewOpen, setPreviewOpen] = useState(false);
    const songIds = [1, 2, 3]; */

    return (
        <>
            <div className="absolute top-0 left-0 right-0 h-[272px] bg-gradient-to-b from-blue-500/20 to-bg-secondary/10"></div>
            <div className="relative">
                {/* <PreviewModal isOpen={previewOpen} onClose={() => setPreviewOpen(false)} songIds={songIds} className="w-[38px] h-[48px]"/> 
                <button onClick={() => setPreviewOpen(true)}>Abrir preview</button> */}
                <div className="py-1 mb-4">
                    <div className="flex items-center gap-2">
                        <ButtonType type={"Todo"} className="font-medium bg-white hover:bg-bg-mini-card-hover text-black" />
                        <ButtonType type={"Música"} className="font-medium bg-bg-mini-card hover:bg-bg-mini-card-hover" />
                        <ButtonType type={"Artistas"} className="font-medium bg-bg-mini-card hover:bg-bg-mini-card-hover" />
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
                <SectionDesktop title="Creado por GhersonSA" items={recientes.map(item => ({...item, rounded: "rounded-sm" }))} Card={CardDesktop} />
                <SectionDesktop title="Recomendado" items={recomendados.map(item => ({...item, rounded: "rounded-sm" }))} Card={CardDesktop} />
                <SectionDesktop title="Tus artistas favoritos" items={favoritos.map(item => ({...item, rounded: "rounded-full", subtitle: "Artista"}))} Card={CardDesktop} />
                <SectionDesktop title="Escuchado recientemente" items={escuchado.map(item => ({...item, rounded: "rounded-sm"}))} Card={CardDesktop} />
                <SectionDesktop title="Álbumes y sencillos populares" items={populares.map(item => ({...item, rounded: "rounded-sm" }))} Card={CardDesktop} />

                <Footer className ="hidden lg:block" />
                <div className="bg-[#ffffff4c] w-3 h-[67px] rounded-none cursor-pointer absolute top-[-40px] right-[-15px]"></div>
            </div>
        </>
    );
}

export default MainDesktop;