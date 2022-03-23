import React from 'react'
import { useState } from 'react';

function App() {
const [title, setTitle]= useState("");
const [body, setBody]= useState("");
const [author,setAuthor] =useState("");

const handleSubmit =(e)=>{
  e.preventDefault();
  const Blog ={title, body, author};
  console.log(Blog);

}

  return (
    <div className='create'>
    <h2>Add a New Blog</h2>

     <form onSubmit={handleSubmit}>
     <label>Blog Title:</label>
     <input type="text" required value={title} onChange ={(e)=>setTitle(e.target.value)} />

     <label>Blog Body:</label>
     <textarea required value={body} onChange ={(e)=>setBody(e.target.value)}></textarea>

     <label>Blog Author</label>
      <select  Value={author} onChange ={(e)=>setAuthor(e.target.value)}>
      <option value="Ama">Ama</option>
      <option value="Kofi">Kofi</option>
      <option value="Adwoa">Adwoa</option>


      </select>
      <button>Add Blog</button>
     </form>

    </div>
  )
}

export default App