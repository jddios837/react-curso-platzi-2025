const Card = ({ title, description }: { title: string; description: string }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card;