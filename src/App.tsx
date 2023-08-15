import Logo from "./components/Logo";
import Menu from "./components/Menu";
import SearchBtn from "./components/SearchBtn";
import SearchInput from "./components/SearchInput";
import Category from "./components/Category";
import FooterNavLink from "./components/FooterNavLink";

import data from "./data";
import Copyright from "./components/Copyright";
import RequestBtn from "./components/RequestBtn";
import SignIn from "./components/SignIn";

function App() {
    const { categories, footerNavLinks } = data;

    return (
        <>
            <header className="header-container">
                <div className="header-wrapper">
                    <div className="header-left-side">
                        <Logo />
                    </div>
                    <div className="header-right-side">
                        <SearchBtn />
                        <Menu />
                        <nav className="nav-container">
                            <RequestBtn />
                            <SignIn />
                        </nav>
                    </div>
                    <SearchInput header={true} />
                </div>
            </header>
            <main className="main-container">
                <div className="main-search-wrapper">
                    <div className="main-search-container">
                        <h1 className="main-heading-text">How can we help?</h1>
                        <SearchInput header={false} />
                    </div>
                </div>
                <div className="main-category-wrapper">
                    <div className="main-category-container">
                        {categories.length > 0 &&
                            categories.map((category, index) => (
                                <Category
                                    heading={category.heading}
                                    description={category.description}
                                    image={category.image}
                                    index={index}
                                    key={index}
                                />
                            ))}
                    </div>
                </div>
            </main>
            <footer className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-nav-wrapper">
                        {footerNavLinks.length > 0 &&
                            footerNavLinks.map((link, index) => {
                                const { heading, links } = link;
                                return (
                                    <FooterNavLink
                                        heading={heading}
                                        links={links}
                                        contact={link?.contact}
                                        key={index}
                                    />
                                );
                            })}
                    </div>
                    {<Copyright />}
                </div>
            </footer>
        </>
    );
}

export default App;
