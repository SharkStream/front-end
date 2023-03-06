import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from './PostAuthor'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const postsResponse = posts.map(post => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p>
                    <PostAuthor userId={post.userId} />

                </p>
            </article>
        )
    })
    return (
        <section>
            <h2>POST</h2>
            {postsResponse}
        </section>
    )
}

export default PostsList