import { books } from '../data/posts';
import BookCard from '../components/Blog/BookCard';
import './BooksPage.css';

export default function BooksPage() {
    const totalBooks = books.length;
    const earliestDate = books[0].dateRead;
    const latestDate = books[books.length - 1].dateRead;

    const fmt = (d) =>
        new Date(d).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

    return (
        <div className="books-page">
            <div className="container">

                {/* Header */}
                <header className="page-header">
                    <p className="library-label">◆ Personal Collection ◆</p>
                    <h1>The Library</h1>
                    <p className="page-description">
                        A chronicle of every book I have ventured through — unfiltered opinions,
                        honest reflections, and the occasional quote that refused to leave my mind.
                    </p>

                    {/* Reading Stats */}
                    <div className="reading-stats">
                        <div className="stat">
                            <span className="stat-number">{totalBooks}</span>
                            <span className="stat-label">Books Read</span>
                        </div>
                        <div className="stat-divider">◆</div>
                        <div className="stat">
                            <span className="stat-number">{fmt(earliestDate)}</span>
                            <span className="stat-label">First Entry</span>
                        </div>
                        <div className="stat-divider">◆</div>
                        <div className="stat">
                            <span className="stat-number">{fmt(latestDate)}</span>
                            <span className="stat-label">Latest Entry</span>
                        </div>
                    </div>
                </header>

                {/* Ornate Divider */}
                <div className="ornate-divider" />

                {/* Books List */}
                <div className="books-list">
                    {[...books].reverse().map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

            </div>
        </div>
    );
}
