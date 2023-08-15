import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBtn() {
    const handleClick = () => {
        const headerSearchWrapper = document.querySelector(
            ".header-search-wrapper"
        );
        headerSearchWrapper?.toggleAttribute("display");
    };

    return (
        <button type="button" id="searchBtn" onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    );
}

export default SearchBtn;
