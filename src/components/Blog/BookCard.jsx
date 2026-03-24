import { Link } from 'react-router-dom';
import './BookCard.css';

export default function BookCard({ book }) {
    const { id, title, author, dateRead, coverImage, genre, review } = book;

    const date = new Date(dateRead);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const excerpt = review.split('\n\n')[0].slice(0, 200) + '...';

    return (
        <article className="book-card">
            <Link to={`/books/${id}`} className="book-card-cover-link" tabIndex={-1} aria-hidden="true">
                <div className="book-card-cover-wrapper">
                    <img
                        src={coverImage}
                        alt={`Cover of ${title}`}
                        className="book-card-cover"
                        loading="lazy"
                    />
                    <div className="book-card-cover-glow" />
                </div>
            </Link>

            <div className="book-card-body">
                <div className="book-card-meta">
                    <span className="book-genre-badge">{genre}</span>
                    <span className="book-date">Read {formattedDate}</span>
                </div>

                <h3 className="book-card-title">
                    <Link to={`/books/${id}`}>{title}</Link>
                </h3>
                <p className="book-card-author">by {author}</p>

                <p className="book-card-excerpt">{excerpt}</p>

                <Link to={`/books/${id}`} className="book-card-cta">
                    Read Review <span className="cta-arrow">→</span>
                </Link>
            </div>
        </article>
    );
}
