const express = require("express");
const router = express.Router();
const Review = require("../../models/review");

router.post("/", (req, res) => {
  console.log(req.body)
  const { title, review, rating, dateposted } = req.body;
  const newReview = new Review({ title, review, rating, dateposted });
  newReview
    .save()
    .then((review) => res.json(review))
    .catch((err) => console.log(err));
});

router.get("/:tourId", (req, res) => {
  Review.find({ tourId: req.params.tourId })
    .sort({ createdAt: "desc" })
    .then((reviews) => res.json(reviews))
    .catch((err) => console.log(err));
});

module.exports = router;