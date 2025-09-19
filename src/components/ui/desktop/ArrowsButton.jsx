import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon";

const ArrowsButton = ({ scrollRef }) => {
    const scroll = (direction) => {
        if (!scrollRef?.current) return;
        const scrollAmount = 300;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }
    return(
        <>
            <button onClick={() => scroll("left")} className="arrow-button left-2">
                <ArrowLeftIcon className="arrow-svg" />
            </button>

            <button onClick={() => scroll("right")} className="arrow-button right-2">
                <ArrowRightIcon className="arrow-svg" />
            </button>
        </>
    )
}

export default ArrowsButton;