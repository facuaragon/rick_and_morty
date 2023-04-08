import SearchBar from "../SearchBar/SearchBar.jsx"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";




const Nav = ({onSearch}) => {
    const location = useLocation();
    if (location.pathname!=="/"){
        return (
            <nav>
                <SearchBar onSearch={onSearch}/>
                <button>
                    <Link to="home">Home</Link>
                </button>
                <button>
                    <Link to="favorites">Favorites</Link>
                </button>
                <button>
                    <Link to="about">About</Link>
                </button>
                <button>
                    <Link to="/">Logout</Link>
                </button>

            </nav>
        )
    }
    return( <></> );
}

export default Nav;