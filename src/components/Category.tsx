interface Props {
    heading: string;
    description: string;
    image: string;
    index: number;
}

function Category({ heading, description, image, index }: Props) {
    return (
        <div className="category" key={index + 1}>
            <img
                src={image && image}
                alt="category image"
                className="category-img"
            />
            <section className="category-text-container">
                <h3 className="category-heading-text">{heading}</h3>
                <p className="category-paragraph-text">{description}</p>
                <a className="category-link-text" href="#">
                    Learn more →
                </a>
            </section>
        </div>
    );
}

export default Category;
