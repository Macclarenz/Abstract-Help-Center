import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SearchCloseBtn() {
    const handleClick = () => {
        const headerSearchWrapper = document.querySelector(
            ".header-search-wrapper"
        );

        headerSearchWrapper?.toggleAttribute("display");
    };
    return (
        <button type="button" id="searchCloseBtn" onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    );
}

export default SearchCloseBtn;
