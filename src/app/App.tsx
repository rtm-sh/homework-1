import MainLayout from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';
import { mockPosts } from '../mocks/mockPosts';

function App() {
    return (
        <MainLayout>
            <PostList posts={mockPosts} />
        </MainLayout>
    );
}

export default App;
