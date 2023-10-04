import React, {useState} from 'react';
import {postAdded} from '../posts/postSlice';
import {useDispatch, useSelector} from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
//import {nanoid} from "@reduxjs/toolkit";

function AddForm() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)
const submit = () => {
     dispatch(postAdded(title, content, userId))
}
const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
))
  return (
    <section>
      <h1>Add new Posts</h1>
      <form>
        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />
        <input 
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
         />
        <select
        id="postAuthor"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
         >
            <option value=""></option>
            {userOptions}
         </select>
         <button 
         type='button'
         onClick={submit}
         disabled={!canSave}
         >Post</button>
      </form>
    </section>
  )
}

export default AddForm