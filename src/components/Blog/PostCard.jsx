import { FiStar } from 'react-icons/fi';
import './PostCard.css';

const PostCard = ({ post }) => {
    const renderRating = (rating) => {
        return (
            <div className="rating">
                {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
                ))}
            </div>
        );
    };

    return (
        <article className="post-card glass">
            <div className="post-card-header">
                <span className={`category-badge ${post.category.toLowerCase()}`}>
                    {post.category}
                </span>
                <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <h3 className="post-title">{post.title}</h3>

            {post.rating && renderRating(post.rating)}

            <p className="post-excerpt">{post.excerpt}</p>

            <a href="#" className="read-more">
                Read More →
            </a>
        </article>
    );
};

export default PostCard;
