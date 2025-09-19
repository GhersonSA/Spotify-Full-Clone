import CardMobile from "../../components/ui/mobile/CardMobile"

const SectionMobile = ({title, items}) => {
    return(
        <div className="main-container">
            <div className="main-margin">
                <h2 className="font-bold mb-2">{title}</h2>
                <div className="main-container-scroll scrollbar-hide">
                    {items.map((item, index) => (
                        <CardMobile key={index} img={item.img} nombre={item.nombre} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionMobile;