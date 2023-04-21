import { useState, useEffect } from 'react';
import { getTour, deleteTour, updateTour } from '../../utilities/tours-service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewList from '../../components/ReviewList/ReviewList';

export default function TourPage() {
    const [tour, setTour] = useState([])
    const navigate = useNavigate() 
    const [reviews, setReviews] = useState([]);
    const [refresh, toggleRefresh] = useState()
    let {id}= useParams()

    useEffect(function() {
        async function retrieveTour() {
            const retrievedTour = await getTour(id);
            setTour(retrievedTour)
        }
       retrieveTour()
    }, []) 

    async function updateTour(id) {
        await updateTour(id)
        toggleRefresh({})
    }

return(
    <>
    <h1>Tour Information Page</h1>
    { 
    <div>
        <h1><b>Title: </b>{tour.title}</h1>
        <h3><b>Description: </b>{tour.description}</h3>
        <Link to={`/tours/${tour._id}/edit`}><button>Edit Tour</button></Link>
    </div>
    }
        <h2>My Review</h2>
        <ReviewList id={id} /> 
        <ReviewForm id={id} />   
        </>
    )
};  