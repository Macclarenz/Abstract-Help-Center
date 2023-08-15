import footerLogo from "../assets/footer-logo.svg";

function Copyright() {
    return (
        <div className="copyright-container">
            <img
                src={footerLogo}
                alt="Abstract Logo"
                className="footer-logo-img"
            />
            <section className="copyright-text-container">
                <p>© Copyright 2023</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </section>
        </div>
    );
}

export default Copyright;
