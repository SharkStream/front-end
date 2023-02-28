const Note = require('../models/Note')
const User = require('../models/User')

const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all notes
// @route Get /notes
// @access Private

const getAllNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().lean()
    if (!notes?.length) {
        return res.status(400).json({ message: 'No notes found' })
    }

    const notesWithUser = await Promise.all(notes.map(async (note) => {
        const user = await User.findById(note.user).lean().exec()
        return { ...note, username: user.username }
    }))
    res.json(notesWithUser)
})

// @desc Create new note
// @route POST /notes
// @access Private

const createNewNote = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body

    // Confirm data
    if (!user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate
    const duplicate = await Note.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: "Duplicate note" })
    }
    const userObject = await User.findById(user).exec()

    if (!userObject) {
        return res.status(400).json({ message: 'User not found' })
    }

    const noteObject = { user, title, text }

    // Create and store new note
    const note = await Note.create(noteObject)

    if (note) { // created
        res.status(201).json({ message: `New note ${title} created` })
    } else {
        res.status(400).json({ message: 'Invalid note data received' })
    }
})

// @desc Update note
// @route PATCH /notes
// @access Private

const updateNote = asyncHandler(async (req, res) => {
    const { id, user, title, text, completed } = req.body

    // Confirm data
    if (!id || !title || !text || !completed) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const note = await Note.findById(id).exec()

    if (!note) {
        return res.status(400).json({ message: 'Note not found' })
    }

    // Check for duplicate
    const duplicate = await Note.findOne({ title }).lean().exec()
    // Allow updates to the original note
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate title' })
    }

    if (user) {
        userObject = await User.findById(user).exec()
        if (!userObject) {
            return res.status(400).json({ message: 'User not found' })
        }
        note.user = user
    }


    note.title = title
    note.text = text
    note.completed = completed

    const updateNote = await note.save()

    res.json({ message: `${updateNote.title} updated` })
})

// @desc Delete note
// @route DELETE /notes
// @access Private

const deleteNote = asyncHandler(async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'Note ID Required' })
    }

    const note = await Note.findById(id).exec()

    if (!note) {
        return res.status(400).json({ message: 'Note not found' })
    }

    const result = await note.deleteOne()

    const reply = `Notename ${result.title} whit ID ${result._id} delete`

    res.json(reply)
})

module.exports = {
    getAllNotes,
    createNewNote,
    updateNote,
    deleteNote
}