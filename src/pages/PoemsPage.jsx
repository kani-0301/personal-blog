import { getPostsByCategory } from '../data/posts';
import './PoemsPage.css';

const PoemsPage = () => {
    const poems = getPostsByCategory('Poem');

    return (
        <div className="poems-page">
            <div className="container">
                <div className="page-header">
                    <h1>Poems</h1>
                    <p className="page-description">
                        Verses that capture fleeting moments and eternal truths
                    </p>
                </div>

                <div className="poems-container">
                    {poems.map((poem, index) => (
                        <div key={poem.id}>
                            <article className="poem">
                                <h2 className="poem-title">{poem.title}</h2>
                                <p className="poem-date">{new Date(poem.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                <pre className="poem-content">{poem.content}</pre>
                            </article>
                            {index < poems.length - 1 && <div className="poem-divider">❦</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PoemsPage;
