import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const postsResponse = posts.map(post => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
            </article>
        )
    })
    return postsResponse
}

export default PostsList