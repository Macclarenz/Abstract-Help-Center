import SearchCloseBtn from "./SearchCloseBtn";
import SearchArrowBtn from "./SearchArrowBtn";

interface Props {
    header: boolean;
}

function SearchInput({ header }: Props) {
    return (
        <div
            className={
                header ? "header-search-wrapper" : "main-search-input-wrapper"
            }
        >
            <div
                className={
                    header
                        ? "header-search-input-container"
                        : "main-search-input-container"
                }
            >
                <input
                    type="text"
                    name=""
                    className="search-input"
                    id={header ? "headerSearchInput" : "mainSearchInput"}
                    placeholder="Search"
                />
                {header && <SearchCloseBtn />}
                {!header && <SearchArrowBtn />}
            </div>
        </div>
    );
}

export default SearchInput;
