import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content">
                    <div className="about-header">
                        <div className="avatar-placeholder">K</div>
                        <h1>About Kanini</h1>
                    </div>

                    <section className="about-section">
                        <h2>Welcome to My Literary Corner</h2>
                        <p>
                            This is a space where I share my journey through the written word —
                            from the books that have moved me to the poems that flow from my own pen.
                            Reading and writing have always been my way of making sense of the world,
                            and this blog is an invitation for you to join me in that exploration.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>What I Read</h2>
                        <p>
                            I'm drawn to stories that challenge perspectives and illuminate the human condition.
                            You'll find reviews spanning literary fiction, memoirs, philosophy, and the occasional
                            self-improvement gem. I believe every book has something to teach us, even if it's
                            just about our own tastes and boundaries.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>What I Write</h2>
                        <p>
                            My poems tend to emerge in quiet moments — observations of nature, reflections on
                            memory, meditations on time and change. I write to capture the ephemeral, to give
                            form to feelings that might otherwise slip away unnoticed.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Let's Connect</h2>
                        <p>
                            I'd love to hear your thoughts on the books and poems I share. Feel free to
                            reach out through the social links in the footer. Happy reading!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
