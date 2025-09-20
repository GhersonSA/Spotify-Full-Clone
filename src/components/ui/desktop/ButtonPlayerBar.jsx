const ButtonPlayerBar = ({icon: Icon, tooltip, onClick}) => {
    return (
        <button onClick={onClick} className="button-svg-playerbar group">
            <span className="flex items-center justify-center">
                <Icon className="svg-player-bar" />
            </span>
            <span className="svg-tooltip-player-bar">
                {tooltip}
            </span>
        </button>
    )
}

export default ButtonPlayerBar;