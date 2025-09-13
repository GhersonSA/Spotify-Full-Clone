const SvgPlayerBar = () => {
    return (
        <button className="button-svg-playerbar group">
            <span className="flex items-center justify-center">
                <RandomIcon className="svg-player-bar" />
            </span>
            <span className="svg-tooltip-player-bar">
                Activar aleatorio
            </span>
        </button>
    )
}

export default SvgPlayerBar;