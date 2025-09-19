import { useRef } from "react";
import ViewAllButton from "../../components/ui/ViewAllButton";
import ArrowsButton from "../../components/ui/desktop/ArrowsButton";

const SectionDesktop = ({title, items, Card }) => {
    const scrollRef = useRef(null);

    return(
        <div className=".main-container">
            <div className="main-margin">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <ViewAllButton />
                </div>
                <div className="relative">
                    <div ref={scrollRef} className="main-container-scroll scrollbar-hide fade-x">
                        {items.map((item, index) => (
                            <Card key={index} img={item.img} nombre={item.nombre} rounded={item.rounded} subtitle={item.subtitle} />
                        ))}
                    </div>

                    <ArrowsButton scrollRef={scrollRef}/>
                </div>
            </div>
        </div>
    )
}

export default SectionDesktop;