const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/product")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: String,
//   },
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "product tidak boleh minus"],
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

// { membuat method }
productSchema.methods.outstock = function () {
  this.stock = 0;
  return this.save();
};

// { membuat method static untuk model }
productSchema.static.closestore = function () {
  return this.updateMany(
    {},
    {
      stock: 0,
      "availability.online": false,
      "availability.offline": false,
    }
  );
};

const Product = mongoose.model("Products", productSchema);

// { mengambil id yang perlu di ubah dengan method }
const changeStock = async (id) => {
  const foundProduct = await Product.findById(id);
  await foundProduct.outstock();
  console.log("berhasil diubah");
};

// changeStock("21321bsbdqh812uwb");

Product.closestore()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// const productOne = new Product({
//   name: "Product One",
//   brand: "cosmic",
//   price: 120000,
//   color: "black",
//   size: "XL",
//   description: "This is a cosmic product one",
//   condition: "new",
//   stock: 3,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

productOne
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// { mengubah product }
// Product.findOneAndUpdate(
//   { name: "Product one" },
//   {
//     name: "Product One",
//     brand: "cosmic",
//     price: 130000,
//     color: "black",
//     size: "XL",
//     description: "This is a cosmic product one",
//     condition: "new",
//     stock: 10,
//     availability: {
//       online: true,
//       offline: true,
//     },
//   },
//   { new: true, runValidators: true }
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console(err.errors.stock.properties.massage);
//     })
// );
