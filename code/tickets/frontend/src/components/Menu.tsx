import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <nav className="flex items-center gap-6">
            <Link to="/home" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/users" className="text-white hover:text-gray-300 transition-colors">Usuários</Link>
            <Link to="/events" className="text-white hover:text-gray-300 transition-colors">Eventos</Link>
            <Link to="/sales" className="text-white hover:text-gray-300 transition-colors">Vendas</Link>
        </nav>
    );
};

export default Menu;