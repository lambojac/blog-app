import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const Write = () => {
    const [value, setValue]=useState("");
    console.log(value)
  return (
    <div className='add'>
    <div className="content">
    <input type="text" placeholder="Title"/>
    <div className="editorContainer">
    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
    </div>
     </div>
    <div className="menu">
        <div className="item">
          <h1>publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <label className='file' htmlfor="file">upload image</label>
          <input  type="file" name="file" id="file"/>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art"/>
          <label htmlfor="art">Art</label>
          <input type="radio" name="cat" value="art" id="science"/>
          <label htmlfor="science">Science</label>
          <input type="radio" name="cat" value="technology" id="technology"/>
          <label htmlfor="art">Technology</label>
          <input type="radio" name="cat" value="cinema" id="cinema"/>
          <label htmlfor="cinema">Cinema</label>
          <input type="radio" name="cat" value="design" id="design"/>
          <label htmlfor="art">Design</label>
          <input type="radio" name="cat" value="food" id="food"/>
          <label htmlfor="art">Food</label>
        </div>
    </div>
    </div>
  )
}

export default Write
