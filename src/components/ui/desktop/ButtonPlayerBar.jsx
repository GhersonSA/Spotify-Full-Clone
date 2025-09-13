const ButtonPlayerBar = ({icon: Icon, tooltip}) => {
    return (
        <button className="button-svg-playerbar group">
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