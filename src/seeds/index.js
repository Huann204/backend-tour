const mongoose = require("mongoose");
require("dotenv").config();

const seedTours = require("./seedTours");
const seedUsers = require("./seedUsers");
const seedBookings = require("./seedBookings");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Kết nối MongoDB thành công");

    // gọi từng seed
    await seedTours();
    // await seedUsers();
    // await seedBookings();

    console.log("🎉 Tất cả dữ liệu seed xong");
    process.exit();
  })
  .catch((err) => console.error("❌ Lỗi MongoDB:", err));
