import PostCard from '../../entities/post/ui/PostCard';
import type { Post } from '../../types/posts';
import styles from './PostList.module.scss';

interface PostListProps {
    posts: Post[];
}

function PostList({ posts }: PostListProps) {
    return (
        <section className={styles.postsBlock}>
            <h2 className={styles['postsBlock__title']}>Список постов</h2>
            {posts.length > 0 ? (
                <ul className={styles['postsBlock__list']}>
                    {posts.map(post => (
                        <li key={post.id} className={styles['postsBlock__item']}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles['postsBlock__empty']}>Постов пока нет</p>
            )}
        </section>
    );
}

export default PostList;
