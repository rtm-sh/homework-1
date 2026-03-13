import React from 'react';
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
                    {posts.map((post, index) => (
                        <React.Fragment key={post.id}>
                            {index > 0 && (
                                <hr className={styles['postsBlock__divider']} />
                            )}
                            <li className={styles['postsBlock__item']}>
                                <PostCard post={post} />
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <p className={styles['postsBlock__empty']}>Постов пока нет</p>
            )}
        </section>
    );
}

export default PostList;
