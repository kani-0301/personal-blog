import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBookById, books } from '../data/posts';
import './BookDetailPage.css';

export default function BookDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = getBookById(id);

    if (!book) {
        return (
            <div className="container section text-center">
                <h2>Book not found</h2>
                <Link to="/books" className="back-link">← Back to The Library</Link>
            </div>
        );
    }

    const { title, author, dateRead, coverImage, genre, review, quote } = book;
    const currentIndex = books.findIndex(b => b.id === book.id);
    const prevBook = books[currentIndex - 1] || null;
    const nextBook = books[currentIndex + 1] || null;

    const paragraphs = review.split('\n\n').filter(p => p.trim());

    const formattedDate = new Date(dateRead).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="book-detail-page">
            <div className="container">

                {/* Back Link */}
                <Link to="/books" className="back-link">
                    <span>←</span> Back to The Library
                </Link>

                {/* Hero */}
                <div className="book-detail-hero">
                    <div className="book-detail-cover-wrapper">
                        <img
                            src={coverImage}
                            alt={`Cover of ${title}`}
                            className="book-detail-cover"
                        />
                        <div className="book-detail-cover-glow" />
                    </div>

                    <div className="book-detail-meta">
                        <span className="book-genre-badge">{genre}</span>
                        <h1 className="book-detail-title">{title}</h1>
                        <p className="book-detail-author">by {author}</p>
                        <p className="book-detail-date">Read on {formattedDate}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="ornate-divider" />

                {/* Review */}
                <article className="book-review-content">
                    {paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </article>

                {/* Quote */}
                {quote && (
                    <blockquote className="book-quote">
                        <p>{quote}</p>
                    </blockquote>
                )}

                {/* Divider */}
                <div className="ornate-divider" />

                {/* Prev / Next Navigation */}
                <nav className="book-nav">
                    {prevBook ? (
                        <Link to={`/books/${prevBook.id}`} className="book-nav-link book-nav-prev">
                            <span className="book-nav-label">← Previous</span>
                            <span className="book-nav-book">
                                <img src={prevBook.coverImage} alt={prevBook.title} className="book-nav-thumb" />
                                <span className="book-nav-title">{prevBook.title}</span>
                            </span>
                        </Link>
                    ) : <div />}

                    {nextBook ? (
                        <Link to={`/books/${nextBook.id}`} className="book-nav-link book-nav-next">
                            <span className="book-nav-label">Next →</span>
                            <span className="book-nav-book">
                                <span className="book-nav-title">{nextBook.title}</span>
                                <img src={nextBook.coverImage} alt={nextBook.title} className="book-nav-thumb" />
                            </span>
                        </Link>
                    ) : <div />}
                </nav>

            </div>
        </div>
    );
}
