const CardSideBarLeft = ({ img, name, artist}) => {
    return (
        <div className="flex items-center gap-3 px-2 py-2 hover:bg-bg-tertiary rounded-lg cursor-pointer">
            <div>
                <img src={img} alt="Artist_img" className={`w-12 h-12 ${artist === "Artista" ? "rounded-full" : "rounded-lg"}`}/>
            </div>
            <div>
                <span className="font-semibold">{name}</span>
                <div className="flex">
                    <span className="text-secondary text-sm font-medium">{artist === "Artista" ? artist : "Lista · " + artist}</span>
                </div>
            </div>
        </div>
    )
}

export default CardSideBarLeft;