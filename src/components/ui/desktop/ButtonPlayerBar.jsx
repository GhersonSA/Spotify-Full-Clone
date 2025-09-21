const ButtonPlayerBar = ({ icon: Icon, tooltip, onClick, active }) => {
    return (
        <button onClick={onClick} className="button-svg-playerbar group">
            <span className="flex items-center justify-center">
                <Icon className={`svg-player-bar ${active ? "text-spotify" : "text-secondary"}`} />
            </span>
            <span className="svg-tooltip-player-bar">
                {tooltip}
            </span>
        </button>
    )
}

export default ButtonPlayerBar;