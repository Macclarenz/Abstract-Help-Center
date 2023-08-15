interface Props {
    heading: string;
    links: Array<string>;
    contact?: { email?: string };
}

function FooterNavLink({ heading, links, contact }: Props) {
    const footerNavLinks = links.map((link, index) => {
        return (
            <li className="footer-nav-item" key={index + 1}>
                <a href="#" className="footer-nav-link footer-nav-link-text">
                    {link}
                </a>
            </li>
        );
    });

    const contactElement = (
        <div className="footer-contact-container">
            <h4 className="footer-contact-heading">Contact Us</h4>
            <a href="#" className="footer-contact-link-text">
                {contact?.email}
            </a>
        </div>
    );
    return (
        <div className="footer-nav-container">
            <h3 className="footer-heading-text">{heading}</h3>
            <ul className="footer-nav-list">
                {links.length > 0 && footerNavLinks}
            </ul>
            {contact && contactElement}
        </div>
    );
}

export default FooterNavLink;
