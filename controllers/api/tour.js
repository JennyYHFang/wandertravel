const Tour = require('../../models/tour');

module.exports = {
 index,
 create,
 deleteTour,
 updateTour,
 getTour,
};

async function index(req, res) {
  try {
    const tours = await Tour.find({userId: req.user._id});
    res.json(tours);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  console.log(req.body)
  try {
    req.body.userId = req.user._id
      console.log(req.body)
      const createdTour = await Tour.create(req.body);
      res.json(createdTour)
    } catch (err) {
        console.log("catch error")
        console.log(err)
        res.status(400).json(err);
    }
 }

 async function deleteTour(req, res) {
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);
    console.log(deletedTour);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function updateTour(req, res) {
  let tourBody = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
  }
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.body._id, {$set: tourBody}, {new: true} );
    res.json(updatedTour)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function getTour(req, res) {
  try {
    const foundTour = await Tour.findById(req.params.id);
    res.json(foundTour);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

