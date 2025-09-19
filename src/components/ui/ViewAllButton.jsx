const ViewAllButton = ({ className }) => {
    return(
        <button className={`text-sm text-secondary font-bold ml-[10px] hover:underline transition-all duration-100 ease-out cursor-pointer ${className}`}>
            Mostrar todos
        </button>
    )
}

export default ViewAllButton;