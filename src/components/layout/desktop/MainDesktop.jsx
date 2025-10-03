import { useState } from "react";
import { recientes, recomendados, favoritos, escuchado, populares } from "../../../data/cardMain";
import SectionDesktop from "../../../features/desktop/SectionDesktop";
import MiniCardMain from "../../ui/desktop/MiniCardMain";
import ButtonType from "../../ui/ButtonType";
import CardDesktop from "../../ui/desktop/CardDesktop";
import Footer from "../Footer";
import PreviewModal from "../../ui/desktop/PreviewModal";
import artists from "../../../data/artists";
import playlists from "../../../data/playlists";

const MainDesktop = () => {
    /* const [previewOpen, setPreviewOpen] = useState(false);
    const songIds = [1, 2, 3]; */
    const [selectedFilter, setSelectedFilter] = useState("Todo");

    const featuredCards = [
        artists.find(a => a.name === "Feid"),
        playlists.find(p => p.title === "Top Hits"),
        playlists.find(p => p.title === "This Is Maluma"),
        artists.find(a => a.name === "Dua Lipa"),
        playlists.find(p => p.title === "This Is Marshmello")
    ]

    // Add this function to determine if a section should be visible
    const shouldShowSection = (sectionType) => {
        if (selectedFilter === "Todo") return true;
        if (selectedFilter === "Artistas") return sectionType === "artist";
        if (selectedFilter === "Música") return ["album", "playlist", "track"].includes(sectionType);
        return true;
    };

    return (
        <>
            <div className="absolute top-0 left-0 right-0 h-[272px] bg-gradient-to-b from-blue-500/20 to-bg-secondary/10"></div>
            <div className="relative">{/*
                <PreviewModal isOpen={previewOpen} onClose={() => setPreviewOpen(false)} songIds={songIds} className="w-[38px] h-[48px]"/> 
                <button onClick={() => setPreviewOpen(true)}>Abrir preview</button>  */}
                <div className="py-1 mb-4">
                    <div className="flex items-center gap-2">
                        <ButtonType type={"Todo"} onClick={() => setSelectedFilter("Todo")} className={`font-medium ${selectedFilter === "Todo" ? "bg-white text-black" : "bg-bg-mini-card"} hover:bg-bg-mini-card-hover`} />
                        <ButtonType type={"Música"} onClick={() => setSelectedFilter("Música")} className={`font-medium ${selectedFilter === "Música" ? "bg-white text-black" : "bg-bg-mini-card"} hover:bg-bg-mini-card-hover`} />
                        <ButtonType type={"Artistas"} onClick={() => setSelectedFilter("Artistas")} className={`font-medium ${selectedFilter === "Artistas" ? "bg-white text-black" : "bg-bg-mini-card"} hover:bg-bg-mini-card-hover`} />
                    </div>
                </div>
                <section className="flex flex-col relative mb-4">
                    <div className="grid gap-2 w-full grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
                        {featuredCards.map((item, index) => (
                            <MiniCardMain 
                                key={`${item.type}-${item.id}-${index}`} 
                                img={item.img}
                                nombre={item.name || item.title}
                                type={item.name ? "artist" : "playlist"}
                                id={item.id}
                            />
                        ))}
                    </div>
                </section>
                {shouldShowSection("artist") && (
                    <SectionDesktop title="Creado por GhersonSA" items={recientes.filter(item => shouldShowSection(item.type))} Card={CardDesktop} />
                )}
                {shouldShowSection("playlist") && (
                    <SectionDesktop title="Recomendado" items={recomendados.map(item => ({...item, rounded: "rounded-sm" }))} Card={CardDesktop} />
                )}
                {shouldShowSection("artist") && (
                    <SectionDesktop title="Tus artistas favoritos" items={favoritos.map(item => ({...item, rounded: "rounded-full", subtitle: "Artista"}))} Card={CardDesktop} />
                )}
                {shouldShowSection("artist") && (
                    <SectionDesktop title="Escuchado recientemente" items={escuchado.map(item => ({...item, rounded: "rounded-sm", type: item.type, id: item.id}))} Card={CardDesktop} />
                )}
                {shouldShowSection("album") && (
                    <SectionDesktop title="Álbumes y sencillos populares" items={populares.map(item => ({...item, rounded: "rounded-sm" }))} Card={CardDesktop} />
                )}

                <Footer className ="hidden lg:block" />
                <div className="bg-[#ffffff4c] w-3 h-[67px] rounded-none cursor-pointer absolute top-[-40px] right-[-15px]"></div>
            </div>
        </>
    );
}

export default MainDesktop;