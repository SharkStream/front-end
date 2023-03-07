import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from './PostAuthor'
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const postsResponse = orderedPosts.map(post => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButton post={post} />
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