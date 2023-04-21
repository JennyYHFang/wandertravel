import React, { useState, useEffect } from "react";

const ReviewList = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {reviews.map((review) => (
          <div key={review._id}>
          <p><b>Title:</b> {review.title}</p>
          <p><b>Review: </b>{review.review}</p>
          <p><b>Rating:</b> {review.rating} star rating</p>
          
        </div>
      ))}
    </div>
  );
};

export default ReviewList;