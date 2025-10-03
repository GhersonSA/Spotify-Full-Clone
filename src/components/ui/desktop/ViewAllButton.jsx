import { useNavigate } from 'react-router-dom';

const ViewAllButton = ({ title, type }) => {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate(`/view-all/${type}`, { 
            state: { title, type }
        });
    };

    return (
        <button onClick={handleViewAll} className="text-secondary font-bold hover:underline">
            Mostrar todos
        </button>
    );
};

export default ViewAllButton;