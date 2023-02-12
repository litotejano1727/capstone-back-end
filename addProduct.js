// const express = require("express");
// const router = express.Router();
// const { table } = require("./product");
// const { Sequelize, DataTypes } = require("sequelize");
// const cors = require("cors");

// app.use(cors({ origin: "*" }));
// router.post("/addproducts", async (req, res) => {
//     try {
//         const { name, price, category, image, description } = req.body;
//         const product = await table.create({
//             name,
//             price,
//             category,
//             image,
//             description,
//         });
//         res.status(201).json(product);
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: "Failed to add product" });
//     }
// });

// module.exports = router;
