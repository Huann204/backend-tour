const Tour = require("../models/Tour");

// Controller: lấy tất cả tours
// Controller: lấy tất cả tours có phân trang
exports.getAllTours = async (req, res) => {
  try {
    // Lấy query string từ FE (mặc định: page=1, limit=10)
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    // Đếm tổng số record trong DB
    const total = await Tour.countDocuments();

    // Lấy dữ liệu theo phân trang
    const tours = await Tour.find()
      .skip((page - 1) * limit) // bỏ qua số record của các trang trước
      .limit(limit); // chỉ lấy đúng số record theo limit

    res.json({
      total, // Tổng số record
      page, // Trang hiện tại
      totalPages: Math.ceil(total / limit), // Tổng số trang
      tours, // Danh sách tour
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Controller: lấy tour theo code
exports.getTourByCode = async (req, res) => {
  try {
    const tour = await Tour.findOne({ code: req.params.code });
    if (!tour) {
      return res.status(404).json({ message: "Tour không tồn tại" });
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Controller: tạo tour mới
exports.createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();
    res.json(newTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // trả về dữ liệu mới sau update
    );

    if (!updatedTour) {
      return res.status(404).json({ message: "Không tìm thấy tour" });
    }

    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller: xóa tour theo ID
exports.deleteTour = async (req, res) => {
  console.log("DELETE params:", req.params);
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);

    if (!deletedTour) {
      return res.status(404).json({ message: "Không tìm thấy tour" });
    }

    res.json({ message: "Xóa tour thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Lấy tour theo id
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour không tồn tại" });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
