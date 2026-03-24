import { Link } from 'react-router-dom';
import { getFeaturedBooks, posts } from '../data/posts';
import BookCard from '../components/Blog/BookCard';
import PostCard from '../components/Blog/PostCard';
import './HomePage.css';

export default function HomePage() {
    const featuredBooks = getFeaturedBooks();
    const recentPosts = posts.slice(0, 2);

    return (
        <div className="home-page">

            {/* Hero */}
            <section className="hero section">
                <div className="container">
                    <p className="hero-eyebrow">◆ Kanini's Blog ◆</p>
                    <h1 className="hero-title">Words, Thoughts<br />& Pages</h1>
                    <p className="hero-subtitle">
                        A personal journal of books devoured, poems felt, and thoughts untangled.
                        Wander through the library below.
                    </p>
                    <div className="hero-cta">
                        <Link to="/books" className="btn-primary">Enter The Library</Link>
                    </div>
                </div>
            </section>

            {/* Featured Books */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Recent Reads</h2>
                    <div className="featured-books-list">
                        {featuredBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/books" className="view-all-link">
                            View all {13} books in The Library →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Posts */}
            {recentPosts.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">More from the Journal</h2>
                        <div className="posts-grid">
                            {recentPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
