import React from 'react'
import { useGetNotesQuery } from './notesApiSlice'
import Note from './Note'

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
})

  let content
  if (isLoading) content = <p>Loading...</p>

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids } = notes

    const tableContent = ids?.length
      ? ids.map(noteId => <Note key={noteId} noteId={noteId} />)
      : null

    content = (
      <table className='table table--notes'>
        <thead className='table__thead'>
          <tr>
            <th scope="col" className='table__th note__status'>Username</th>
            <th scope="col" className='table__th note__status'>Created</th>
            <th scope="col" className='table__th note__status'>Updated</th>
            <th scope="col" className='table__th note__status'>Title</th>
            <th scope="col" className='table__th note__status'>Owner</th>
            <th scope="col" className='table__th note__status'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    )
  }
  return content
}

export default NotesList