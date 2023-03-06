import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postsSlice"

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = Boolean(title) && Boolean(content)

    const resetInput = () => {
        setTitle('')
        setContent('')
    }

    const onSavePostClicked = () => {
        if (canSave) {
            dispatch(postAdded({title, content, id:nanoid()}))
            resetInput()
        }
    }

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
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm