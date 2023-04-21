import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as toursService from '../../utilities/tours-service'


export default function NewTourPage() {
const navigate = useNavigate()  
const [post, setPost] = useState({title:"", location:"", description:"", date:""});

  function handleChange(evt) {
    setPost({ ...post, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    toursService.createTour(post);
    setPost({title:"", location:"", description:"", date:""});
    navigate("/tours")
  }
    return (
      <>
      <h1>Add New Tour</h1>
      <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
      
          <label htmlFor="date">Date:
            <input type="date" name="date" id="date" onChange={handleChange} value={post.date}/>
          </label>

          <label htmlFor="title">Title:
            <input type="text" name="title" id="title" onChange={handleChange} value={post.title}/>
          </label>

          <label htmlFor="location">Location:
            <input type="text" name="location" id="location" onChange={handleChange} value={post.location}/>
          </label>

          <label htmlFor="description">Description:
            <input type="text" name="description" id="description" onChange={handleChange} value={post.description}/>
          </label>
          
          <input type="submit" value="Add Tour" />
      </form>
      </div>   
      </>
    );
 }