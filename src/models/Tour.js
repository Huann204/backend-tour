const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    images: [{ type: String }], // mảng ảnh

    priceOld: { type: Number, required: true },
    priceNew: { type: Number, required: true },

    code: { type: String, unique: true }, // mã tour duy nhất
    departureDate: { type: String, required: true }, // có thể đổi sang Date
    duration: { type: String, required: true },
    stock: { type: Number, default: 0 },

    locationStart: { type: String }, // điểm xuất phát
    vehicle: { type: String }, // phương tiện

    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },

    status: { type: String, default: "Còn chỗ" },

    description: { type: String },

    prices: {
      adult: { type: Number, required: true },
      child: { type: Number, required: true },
      baby: { type: Number, required: true },
    },

    schedule: [
      {
        day: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String },
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", TourSchema);
