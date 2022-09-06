const { Order } = require("../models/Order");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const moment = require("moment");
const sendEmail = require("../middleware/sendEmail");

const router = require("express").Router();

//CREATE
// createOrder is fired by stripe webhook... check stripe.js

//UPDATE
router.put("/:id", isAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
		console.log("status:",req.body.delivery_status)

		if(req.body.delivery_status === "onderweg") {
			sendEmail(req.body.shipping.email, "Uw Gunblaster.nl bestelling is onderweg!", "Uw Gunblaster.nl bestelling is successvol onderweg door de koerier! Klik hieronder om uw bestellingstatus te bekijken.");
		} else if (req.body.delivery_status === "geleverd") {
			sendEmail(req.body.shipping.email, "Uw Gunblaster.nl bestelling is geleverd!", "Uw Gunblaster.nl bestelling is geleverd bij het gegeven adres! Klik hieronder om uw bestellingstatus te bekijken.");
		}

    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("Order has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET USER ORDERS
router.get("/find/:id", isUser, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET ALL ORDERS

router.get("/", isAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const orders = query
      ? await Order.find().sort({ _id: -1 }).limit(4)
      : await Order.find().sort({ _id: -1 });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET AN ORDER
router.get("/findOne/:id", isAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET ORDER STATS
router.get("/stats", isAdmin, async (req, res) => {
  const previousMonth = moment()
    .month(moment().month() - 2)
    .format();

  try {
    const orders = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(previousMonth) } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET MONTHLY INCOME

router.get("/income", isAdmin, async (req, res) => {
  const previousMonth = moment()
    .month(moment().month() - 2)
    .format();

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(previousMonth) } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$total",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

// WEEK'S SALES

router.get("/week-sales", isAdmin, async (req, res) => {
  const last7Days = moment()
    .day(moment().day() - 7)
    .format();

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(last7Days) } } },
      {
        $project: {
          day: { $dayOfWeek: "$createdAt" },
          sales: "$total",
        },
      },
      {
        $group: {
          _id: "$day",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/all-sales", isAdmin, async (req, res) => {
  try {
    const income = await Order.aggregate([
      {
        $project: {
          sales: "$total",
        },
      },
      {
        $group: {
					_id: "$all",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
