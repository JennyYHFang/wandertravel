import { useState, useEffect } from "react";
import * as toursService from '../../utilities/tours-service'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function EditTourPage() {
const navigate = useNavigate() 
const [tour, setTour] = useState({});
let {id}= useParams()
console.log(id)

useEffect(function() {
    async function retrieveTour() {
        const retrievedTour = await toursService.getTour(id);
        setTour(retrievedTour)
    }
   retrieveTour()
}, [])  

  function handleChange(evt) {
    setTour({ ...tour, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    toursService.updateTour(id, tour);
    setTour({title:"", location:"", description:"", date:""});
    navigate("/tours")
  }

return (
  <>
  <h1>Edit Tour</h1>
      <form action="" onSubmit={handleSubmit}>
          <label htmlFor="date">Date:
            <input type="date" name="date" id="date" onChange={handleChange} value={tour.date}/>
          </label>

          <label htmlFor="title">Title:
            <input type="text" name="title" id="title" onChange={handleChange} value={tour.title}/>
          </label>

          <label htmlFor="location">Location:
            <input type="text" name="location" id="location" onChange={handleChange} value={tour.location}/>
          </label>

          <label htmlFor="description">Description:
            <input type="text" name="description" id="description" onChange={handleChange} value={tour.description} />
          </label>

          <input type="submit" value="Edit Tour"/>
      </form>
      </>
  );
}