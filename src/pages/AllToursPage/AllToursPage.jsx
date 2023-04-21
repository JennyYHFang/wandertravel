import { useState, useEffect } from 'react';
import { getAllTours as getAllTours, deleteTour, updateTour } from '../../utilities/tours-service';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function AllToursPage() {
    const [tours, setTours] = useState([])
    const [refresh, toggleRefresh] = useState()

    useEffect(function() {
        async function retrieveTours() {
            const retrievedTours = await getAllTours()
            setTours(retrievedTours)
        }
       retrieveTours()
    }, [tours]) 

    async function deleteImage(id) {
        await deleteTour(id)
        const toursList = await getAllTours()
        setTours(toursList)
    }

    function convertDate(date) {
        const formattedDate = moment(date).format('MMMM d, YYYY')
        return formattedDate
    }

return(
    <>
    <h1>All Tours</h1>
    { tours.map( (tour, idx)  => (
        <div key={idx}>
            <h3>{convertDate(tour.date)}</h3>
            <h1>{tour.title}</h1>
            <h3>{tour.location}</h3>
            <Link to={`/tours/${tour._id}`}><button>Tour</button></Link>
            <button onClick={ () => deleteImage(tour._id)}>x</button>
        </div>
    ))}
    </>
)
};  