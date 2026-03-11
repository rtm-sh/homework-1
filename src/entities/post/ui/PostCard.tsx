import type { Post } from '../../../types/posts';
import styles from './PostCard.module.scss';

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    return (
        <div className={styles.postCard}>
            <h3 className={styles['postCard__title']}>{post.title}</h3>
            <p className={styles['postCard__desc']}>{post.content}</p>
        </div>
    );
}

export default PostCard;
