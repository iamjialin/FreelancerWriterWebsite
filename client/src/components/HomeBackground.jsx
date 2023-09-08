import "./css/HomeBackground.css"

export default function HomeBackground() {
    return (
        <div className="container">
            <img className="background-img" src="./home-background.jpg" alt="background" />
            <h1 className="greeting">Hi, I am Emerald, </h1>
            <p className="intro-text">
                I am a freelance author crafting cool stories
                on interdimensional deities, eldritch horrors,
                and people who control them.
            </p>
        </div>
    )
}