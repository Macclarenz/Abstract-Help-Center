import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SearchArrowBtn() {
    return (
        <button type="button" id="searchArrowBtn">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );
}

export default SearchArrowBtn;
