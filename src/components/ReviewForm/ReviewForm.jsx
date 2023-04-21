import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";

const ReviewForm = ({id}) => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [dateposted, setDateposted] = useState(Date.now());
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(title)
    console.log(review)
    console.log(rating)
    console.log(dateposted)
    try {
      await axios.post('/api/reviews', {
        title,
        review,
        rating,
        dateposted,
      });
      setSuccess(true);
      setTitle('');
      setReview('');
      setRating(0);
      setDateposted(Date.now());
    } catch (error) {
      console.log(error);
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating)
  };
   

  return (
    <div className="form-container">
      <h3>Leave a Review</h3>
      {success && <p>Thank you for your review!</p>}
      <form onSubmit={handleSubmit}>

        <label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title: &nbsp;&nbsp;
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <p>&nbsp;</p>
        <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: &nbsp;&nbsp;&nbsp;
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        </label>

        <p></p>
        <p></p><p></p>

        <label>
        &nbsp;&nbsp; Review: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <textarea rows="6" cols="80" value={review} onChange={(e) => setReview(e.target.value)} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;