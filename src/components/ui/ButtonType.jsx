const ButtonType = ({ type, className }) => {
    return (
        <button className={`py-[6px] px-3 rounded-full text-sm transition-colors duration-200 ease-in-out cursor-pointer ${className}`}>
            {type}
        </button>
    )
}

export default ButtonType;