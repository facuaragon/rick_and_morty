import SearchBar from "../SearchBar/SearchBar.jsx"

const Nav = ({onSearch}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;