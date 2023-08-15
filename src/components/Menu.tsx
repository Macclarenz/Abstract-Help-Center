function Menu() {
    const handleClick = () => {
        const navContainer = document.querySelector(".nav-container");
        const navMenuBtn = document.querySelector("#navMenuBtn");

        navContainer?.toggleAttribute("display");
        navMenuBtn?.toggleAttribute("display");
    };
    return (
        <button type="button" id="navMenuBtn" onClick={handleClick}>
            <span className="nav-menu-middle-stroke"></span>
        </button>
    );
}

export default Menu;
