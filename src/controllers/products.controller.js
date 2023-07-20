const catchAsync = require("../utils/catchAsync");
const { Product } = require("../db");

exports.findProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    message: "Products found",
    results: products.length,
    products,
  });
});

exports.createProducts = catchAsync(async (req, res, next) => {
  const { name, image, price, highlight_date } = req.body;

  const newProduct = await Product.create({
    name,
    image,
    price,
    highlight_date,
  });

  res.status(200).json({
    message: "Product created",
    newProduct,
  });
});
