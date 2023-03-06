import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const AddPostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const resetInput = () => {
        setTitle('')
        setContent('')
        setUserId('')
    }

    const onSavePostClicked = () => {
        if (canSave) {
            dispatch(postAdded({title, content, id:nanoid(), userId, date:new Date().toISOString()}))
            resetInput()
        }
    }

    const options = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <br />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onUserIdChanged}
                >
                    {options}
                </select>
                <br />
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <br />
                <button 
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm