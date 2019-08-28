let express = require('express');
let router = express.Router();
let oneBookingModel = require('../models/oneBookingModel');
let rooundBookingModel = require('../models/rooundBookingModel');
//let cors = require('cors');
let app = express();
//app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    return res.status(200).json({});
};
  next();
});

router.post("/oneWay", async (req, res) => {
  console.log(req.body);
  const bookingData = new oneBookingModel({
    origin: req.body.origin,
    destination: req.body.destination,
    departDate: req.body.departDate,
    returnDate: req.body.returnDate
});
    try{ 
    const savedPost = await bookingData.save(); 
    res.json(savedPost); 
    }catch(err) { 
    res.json({ message: err})
}
    
});

router.post("/roundTrip", async (req, res) => {
  console.log(req.body);
  const bookingData = new rooundBookingModel({
    origin: req.body.origin,
    destination: req.body.destination,
    departDate: req.body.departDate,
    returnDate: req.body.returnDate
});
    try{ 
    const savedPost = await bookingData.save(); 
    res.json(savedPost); 
    }catch(err) { 
    res.json({ message: err})
}
    
});




module.exports = router;