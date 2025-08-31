const mongoose = require("mongoose");
require("dotenv").config();
const Tour = require("../models/Tour");

const tours = [
  {
    title: "Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa (6N5Đ)",
    image: "img/tours/halong1.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 12000000,
    priceNew: 10000000,
    code: "2BT00001",
    departureDate: "2025-10-20",
    duration: "6 Ngày 5 Đêm",
    stock: 20,
    locationStart: "Hà Nội",
    vehicle: "Ô tô 45 chỗ",
    rating: 4.8,
    reviewsCount: 500,
    status: "Còn chỗ",
    description: "Nổi bật với dịch vụ, chất lượng 5 sao...",
    prices: {
      adult: 10000000,
      child: 7990000,
      baby: 5990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất...",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Ninh Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất... ",
      },
      {
        day: "Ngày 3",
        title: "Khám phá Ninh Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất... ",
      },
      {
        day: "Ngày 4",
        title: "Khám phá Ninh Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất... ",
      },
      {
        day: "Ngày 5",
        title: "Khám phá Ninh Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất... ",
      },
      {
        day: "Ngày 6",
        title: "Khám phá Ninh Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng. Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách. Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất... ",
      },
    ],
  },
  {
    title: "Đà Nẵng - Hội An - Bà Nà Hills (4N3Đ)",
    image: "img/tours/china.png",
    images: [
      "img/tours/china.png",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 9500000,
    priceNew: 7990000,
    code: "DNH00021",
    departureDate: "2025-11-05",
    duration: "4 Ngày 3 Đêm",
    stock: 25,
    locationStart: "TP.HCM",
    vehicle: "Máy bay + Xe du lịch",
    rating: 4.9,
    reviewsCount: 820,
    status: "Còn chỗ",
    description:
      "Trải nghiệm miền Trung đầy màu sắc với phố cổ Hội An, Bà Nà Hills cùng cây Cầu Vàng nổi tiếng thế giới.",
    prices: {
      adult: 7990000,
      child: 5990000,
      baby: 3990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Đà Nẵng",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tập trung tại sân bay Tân Sơn Nhất, HDV hỗ trợ làm thủ tục. Bay đến Đà Nẵng. Trưa: Dùng cơm tại nhà hàng địa phương. Chiều: Tham quan Ngũ Hành Sơn, làng đá mỹ nghệ Non Nước. Tối: Ăn tối và dạo phố đêm ven sông Hàn.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Bà Nà Hills",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Khởi hành đi Bà Nà Hills. Trải nghiệm cáp treo đạt nhiều kỷ lục thế giới, tham quan Cầu Vàng, Làng Pháp, Vườn hoa Le Jardin. Trưa: Buffet tại nhà hàng trên Bà Nà. Chiều: Vui chơi Fantasy Park. Tối: Về lại Đà Nẵng, ăn tối, nghỉ ngơi.",
      },
      {
        day: "Ngày 3",
        title: "Phố Cổ Hội An",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tự do tắm biển Mỹ Khê. Trưa: Ăn trưa tại Đà Nẵng. Chiều: Di chuyển đi Hội An, tham quan Chùa Cầu, phố đèn lồng, sông Hoài. Tối: Ăn tối tại Hội An, thưởng thức đặc sản Cao Lầu, Mì Quảng. Sau đó quay lại Đà Nẵng nghỉ đêm.",
      },
      {
        day: "Ngày 4",
        title: "Đà Nẵng – TP.HCM",
        content:
          "Sáng: Tự do mua sắm đặc sản miền Trung. Trưa: Làm thủ tục trả phòng khách sạn. Xe đưa đoàn ra sân bay làm thủ tục về lại TP.HCM. Kết thúc chương trình, chia tay và hẹn gặp lại.",
      },
    ],
  },

  {
    title: "Đà Lạt - Thành Phố Ngàn Hoa (3N2Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 7500000,
    priceNew: 5990000,
    code: "DLT00012",
    departureDate: "2025-09-15",
    duration: "3 Ngày 2 Đêm",
    stock: 18,
    locationStart: "TP.HCM",
    vehicle: "Xe giường nằm + Ô tô",
    rating: 4.7,
    reviewsCount: 420,
    status: "Còn chỗ",
    description:
      "Khám phá thành phố ngàn hoa với khí hậu mát lạnh quanh năm, hồ Xuân Hương, thung lũng Tình Yêu và nhiều điểm check-in tuyệt đẹp.",
    prices: {
      adult: 5990000,
      child: 4590000,
      baby: 2590000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Đà Lạt",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Xe giường nằm khởi hành từ TP.HCM đi Đà Lạt. Trưa: Đến Đà Lạt, dùng cơm trưa và nhận phòng khách sạn. Chiều: Tham quan Quảng Trường Lâm Viên, Hồ Xuân Hương. Tối: Dùng bữa tối và tự do dạo chợ đêm Đà Lạt.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Đà Lạt",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan Thung Lũng Tình Yêu, Đồi Mộng Mơ. Trưa: Ăn trưa tại nhà hàng địa phương. Chiều: Tham quan Thiền Viện Trúc Lâm, hồ Tuyền Lâm. Tối: Ăn tối, tham gia giao lưu Cồng Chiêng Tây Nguyên.",
      },
      {
        day: "Ngày 3",
        title: "Đà Lạt – TP.HCM",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan Dinh Bảo Đại, vườn hoa Thành phố. Trưa: Trả phòng khách sạn, ăn trưa. Chiều: Khởi hành về TP.HCM. Tối: Kết thúc chương trình, chia tay đoàn.",
      },
    ],
  },

  {
    title: "Phú Quốc - Thiên Đường Biển Ngọc (3N2Đ)",
    image: "img/tours/paris.png",
    images: [
      "img/tours/paris.png",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 10500000,
    priceNew: 8990000,
    code: "PQ00031",
    departureDate: "2025-12-01",
    duration: "3 Ngày 2 Đêm",
    stock: 30,
    locationStart: "Hà Nội",
    vehicle: "Máy bay + Xe du lịch",
    rating: 4.9,
    reviewsCount: 600,
    status: "Còn chỗ",
    description:
      "Trải nghiệm biển xanh cát trắng, lặn ngắm san hô, tham quan VinWonders và Safari, thưởng thức hải sản tươi ngon.",
    prices: {
      adult: 8990000,
      child: 6990000,
      baby: 3990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Phú Quốc",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tập trung tại sân bay Nội Bài, bay thẳng đến Phú Quốc. Trưa: Nhận phòng khách sạn, ăn trưa. Chiều: Tắm biển, check-in Sunset Sanato. Tối: Ăn tối tại nhà hàng, tự do khám phá chợ đêm Dinh Cậu.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Nam Đảo",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan Cáp treo Hòn Thơm, lặn ngắm san hô. Trưa: Ăn trưa trên đảo. Chiều: Tham quan Bãi Sao, Nhà tù Phú Quốc. Tối: Ăn tối và thưởng thức hải sản đặc sản Phú Quốc.",
      },
      {
        day: "Ngày 3",
        title: "VinWonders – Safari – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan VinWonders hoặc Safari Phú Quốc. Trưa: Ăn trưa trong khu vui chơi. Chiều: Làm thủ tục trả phòng khách sạn, xe đưa ra sân bay về Hà Nội. Kết thúc hành trình.",
      },
    ],
  },
  {
    title: "Huế - Đà Nẵng - Hội An (5N4Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 11500000,
    priceNew: 9200000,
    code: "HDN00041",
    departureDate: "2025-11-12",
    duration: "5 Ngày 4 Đêm",
    stock: 22,
    locationStart: "Hà Nội",
    vehicle: "Máy bay + Xe du lịch",
    rating: 4.8,
    reviewsCount: 380,
    status: "Còn chỗ",
    description:
      "Khám phá miền Trung với Cố đô Huế mộng mơ, Đà Nẵng trẻ trung và phố cổ Hội An lung linh đèn lồng.",
    prices: {
      adult: 9200000,
      child: 7200000,
      baby: 3990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Huế",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Bay từ Hà Nội đến Huế. Trưa: Dùng cơm và nhận phòng khách sạn. Chiều: Tham quan Kinh thành Huế, chùa Thiên Mụ. Tối: Ăn tối và đi thuyền rồng nghe ca Huế trên sông Hương.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Huế",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan lăng Minh Mạng, lăng Khải Định. Trưa: Ăn đặc sản Huế. Chiều: Mua sắm tại chợ Đông Ba. Tối: Ăn tối và nghỉ ngơi.",
      },
      {
        day: "Ngày 3",
        title: "Huế – Đà Nẵng",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Di chuyển qua đèo Hải Vân. Trưa: Dùng cơm tại Đà Nẵng. Chiều: Tham quan Bán đảo Sơn Trà, chùa Linh Ứng. Tối: Ăn tối, dạo phố ven sông Hàn.",
      },
      {
        day: "Ngày 4",
        title: "Khám phá Hội An",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tắm biển Mỹ Khê. Trưa: Ăn trưa tại Đà Nẵng. Chiều: Tham quan phố cổ Hội An, chùa Cầu, sông Hoài. Tối: Ăn tối đặc sản Hội An, dạo phố đèn lồng.",
      },
      {
        day: "Ngày 5",
        title: "Đà Nẵng – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan Ngũ Hành Sơn. Trưa: Ăn trưa, trả phòng khách sạn. Chiều: Bay về Hà Nội, kết thúc hành trình.",
      },
    ],
  },

  {
    title: "Miền Tây - Cần Thơ - Châu Đốc (3N2Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 5500000,
    priceNew: 4490000,
    code: "MT00051",
    departureDate: "2025-09-25",
    duration: "3 Ngày 2 Đêm",
    stock: 28,
    locationStart: "TP.HCM",
    vehicle: "Ô tô du lịch",
    rating: 4.6,
    reviewsCount: 250,
    status: "Còn chỗ",
    description:
      "Trải nghiệm miền sông nước Cửu Long, chợ nổi Cái Răng, rừng tràm Trà Sư và núi Sam linh thiêng.",
    prices: {
      adult: 4490000,
      child: 3290000,
      baby: 1990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Cần Thơ",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Xuất phát từ TP.HCM đi Cần Thơ. Trưa: Ăn trưa và nhận phòng khách sạn. Chiều: Tham quan nhà cổ Bình Thủy, bến Ninh Kiều. Tối: Ăn tối và tự do khám phá Cần Thơ về đêm.",
      },
      {
        day: "Ngày 2",
        title: "Chợ nổi – Châu Đốc",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan chợ nổi Cái Răng, thưởng thức trái cây miền Tây. Trưa: Ăn trưa trên đường đi Châu Đốc. Chiều: Tham quan núi Sam, miếu Bà Chúa Xứ. Tối: Ăn tối và nghỉ đêm tại Châu Đốc.",
      },
      {
        day: "Ngày 3",
        title: "Châu Đốc – TP.HCM",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan rừng tràm Trà Sư. Trưa: Ăn trưa tại nhà hàng địa phương. Chiều: Khởi hành về TP.HCM, kết thúc chuyến đi.",
      },
    ],
  },
  {
    title: "Hạ Long - Yên Tử - Sapa (5N4Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 13800000,
    priceNew: 11500000,
    code: "HLYTSP00061",
    departureDate: "2025-10-10",
    duration: "5 Ngày 4 Đêm",
    stock: 20,
    locationStart: "Hà Nội",
    vehicle: "Xe du lịch + Cáp treo",
    rating: 4.85,
    reviewsCount: 460,
    status: "Còn chỗ",
    description:
      "Trải nghiệm miền Bắc trọn vẹn với vịnh Hạ Long kỳ vĩ, non thiêng Yên Tử và vùng núi Sapa mờ sương lãng mạn.",
    prices: {
      adult: 11500000,
      child: 8900000,
      baby: 4990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Hạ Long",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Khởi hành từ Hà Nội đi Hạ Long. Trưa: Ăn trưa trên du thuyền, thưởng ngoạn cảnh vịnh Hạ Long với hàng nghìn đảo đá. Chiều: Tham quan hang Sửng Sốt, hòn Gà Chọi. Tối: Ăn tối trên du thuyền, nghỉ đêm giữa vịnh.",
      },
      {
        day: "Ngày 2",
        title: "Hạ Long – Yên Tử",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Ngắm bình minh trên vịnh, ăn sáng buffet. Trưa: Trả phòng du thuyền, di chuyển đến Yên Tử. Chiều: Đi cáp treo lên chùa Hoa Yên, chinh phục non thiêng Yên Tử. Tối: Ăn tối và nghỉ đêm tại Hạ Long.",
      },
      {
        day: "Ngày 3",
        title: "Hạ Long – Lào Cai – Sapa",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Xuất phát đi Lào Cai. Trưa: Ăn trưa trên đường. Chiều: Đến Sapa, nhận phòng khách sạn. Tham quan bản Cát Cát, khám phá văn hóa dân tộc H’Mông. Tối: Ăn tối, tự do dạo phố Sapa về đêm.",
      },
      {
        day: "Ngày 4",
        title: "Sapa – Fansipan",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Đi cáp treo Fansipan – Nóc nhà Đông Dương. Tham quan chùa Trình, đỉnh Fansipan. Trưa: Ăn trưa tại nhà hàng. Chiều: Tự do mua sắm tại chợ Sapa. Tối: Ăn tối, nghỉ đêm tại Sapa.",
      },
      {
        day: "Ngày 5",
        title: "Sapa – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Ăn sáng, tham quan nhà thờ Đá Sapa. Trưa: Trả phòng khách sạn, ăn trưa. Chiều: Di chuyển về Hà Nội, kết thúc chuyến đi.",
      },
    ],
  },
  {
    title: "Nha Trang - Vinpearl - Đảo Điệp Sơn (4N3Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 9800000,
    priceNew: 8200000,
    code: "NT00071",
    departureDate: "2025-11-18",
    duration: "4 Ngày 3 Đêm",
    stock: 26,
    locationStart: "TP.HCM",
    vehicle: "Máy bay + Xe du lịch + Cano",
    rating: 4.9,
    reviewsCount: 510,
    status: "Còn chỗ",
    description:
      "Khám phá thành phố biển Nha Trang xinh đẹp, vui chơi tại VinWonders và check-in con đường cát nổi tiếng trên đảo Điệp Sơn.",
    prices: {
      adult: 8200000,
      child: 6200000,
      baby: 3200000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Nha Trang",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Bay từ TP.HCM đi Nha Trang. Trưa: Ăn trưa tại nhà hàng địa phương. Chiều: Nhận phòng khách sạn, tham quan Tháp Bà Ponagar, tắm bùn khoáng. Tối: Ăn tối và dạo biển Trần Phú.",
      },
      {
        day: "Ngày 2",
        image: "img/tours/langbac.webp",
        title: "Khám phá VinWonders",
        content:
          "Sáng: Đi cáp treo vượt biển dài nhất thế giới đến VinWonders. Tham gia các trò chơi cảm giác mạnh, thủy cung, công viên nước. Trưa: Ăn buffet tại khu vui chơi. Tối: Xem nhạc nước đặc sắc, về khách sạn nghỉ ngơi.",
      },
      {
        day: "Ngày 3",
        title: "Đảo Điệp Sơn",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Đi cano ra đảo Điệp Sơn, check-in con đường cát nổi giữa biển độc đáo. Trưa: Ăn hải sản trên đảo. Chiều: Về lại Nha Trang, tự do tắm biển. Tối: Ăn tối và thưởng thức hải sản đặc sản Nha Trang.",
      },
      {
        day: "Ngày 4",
        title: "Nha Trang – TP.HCM",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tự do mua sắm quà lưu niệm. Trưa: Làm thủ tục trả phòng, ra sân bay bay về TP.HCM. Kết thúc chuyến đi.",
      },
    ],
  },
  {
    title: "Tây Nguyên - Buôn Mê Thuột - Pleiku (4N3Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 8800000,
    priceNew: 7200000,
    code: "TN00081",
    departureDate: "2025-12-05",
    duration: "4 Ngày 3 Đêm",
    stock: 24,
    locationStart: "TP.HCM",
    vehicle: "Máy bay + Xe du lịch",
    rating: 4.7,
    reviewsCount: 310,
    status: "Còn chỗ",
    description:
      "Khám phá Tây Nguyên hùng vĩ với thác Dray Nur, hồ T’Nưng và văn hóa cồng chiêng đặc sắc.",
    prices: {
      adult: 7200000,
      child: 5200000,
      baby: 2900000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Buôn Mê Thuột",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Bay từ TP.HCM đến Buôn Mê Thuột. Trưa: Ăn trưa và nhận phòng khách sạn. Chiều: Tham quan Làng cà phê Trung Nguyên, Bảo tàng Thế giới Cà phê. Tối: Ăn tối, thưởng thức cơm lam gà nướng.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá thác Dray Nur",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan thác Dray Nur hùng vĩ. Trưa: Ăn trưa bên suối. Chiều: Tham quan Buôn Đôn, cầu treo bắc qua sông Sêrêpôk. Tối: Giao lưu cồng chiêng cùng đồng bào Tây Nguyên.",
      },
      {
        day: "Ngày 3",
        title: "Buôn Mê Thuột – Pleiku",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Di chuyển đi Pleiku. Trưa: Ăn trưa, tham quan Biển Hồ T’Nưng. Chiều: Khám phá chùa Minh Thành, quảng trường Đại Đoàn Kết. Tối: Ăn tối và nghỉ ngơi.",
      },
      {
        day: "Ngày 4",
        title: "Pleiku – TP.HCM",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan làng Kon K’tu. Trưa: Ăn trưa, trả phòng khách sạn. Chiều: Bay về TP.HCM, kết thúc chuyến đi.",
      },
    ],
  },
  {
    title: "Nghệ An - Quảng Bình - Phong Nha (4N3Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 9700000,
    priceNew: 7990000,
    code: "PN00091",
    departureDate: "2025-09-28",
    duration: "4 Ngày 3 Đêm",
    stock: 20,
    locationStart: "Hà Nội",
    vehicle: "Xe du lịch + Thuyền",
    rating: 4.8,
    reviewsCount: 280,
    status: "Còn chỗ",
    description:
      "Khám phá quê hương Bác Hồ, viếng mộ Đại tướng Võ Nguyên Giáp và tham quan động Phong Nha kỳ vĩ.",
    prices: {
      adult: 7990000,
      child: 5990000,
      baby: 2990000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Nghệ An",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Khởi hành từ Hà Nội đi Nghệ An. Trưa: Ăn trưa và tham quan quê hương Bác Hồ tại Nam Đàn. Tối: Ăn tối và nghỉ đêm tại Vinh.",
      },
      {
        day: "Ngày 2",
        title: "Nghệ An – Quảng Bình",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Đi Quảng Bình. Trưa: Ăn trưa tại Đồng Hới. Chiều: Viếng mộ Đại tướng Võ Nguyên Giáp tại Vũng Chùa. Tối: Ăn tối và nghỉ ngơi tại Đồng Hới.",
      },
      {
        day: "Ngày 3",
        title: "Khám phá Phong Nha",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Đi thuyền trên sông Son vào động Phong Nha. Trưa: Ăn trưa tại nhà hàng. Chiều: Tham quan động Tiên Sơn. Tối: Ăn tối và nghỉ ngơi.",
      },
      {
        day: "Ngày 4",
        title: "Quảng Bình – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tự do mua sắm. Trưa: Ăn trưa, trả phòng. Chiều: Di chuyển về Hà Nội, kết thúc chương trình.",
      },
    ],
  },
  {
    title: "Hà Giang - Đồng Văn - Mã Pí Lèng (4N3Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 11200000,
    priceNew: 9500000,
    code: "HG00101",
    departureDate: "2025-10-30",
    duration: "4 Ngày 3 Đêm",
    stock: 18,
    locationStart: "Hà Nội",
    vehicle: "Xe giường nằm + Ô tô địa phương",
    rating: 4.95,
    reviewsCount: 540,
    status: "Còn chỗ",
    description:
      "Hành trình lên cực Bắc tổ quốc với cao nguyên đá Đồng Văn, cột cờ Lũng Cú và đèo Mã Pí Lèng huyền thoại.",
    prices: {
      adult: 9500000,
      child: 7200000,
      baby: 4200000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Hà Giang",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Khởi hành từ Hà Nội đi Hà Giang. Trưa: Ăn trưa trên đường. Chiều: Đến Hà Giang, tham quan cột mốc Km0, nhận phòng khách sạn. Tối: Ăn tối và nghỉ ngơi.",
      },
      {
        day: "Ngày 2",
        title: "Hà Giang – Quản Bạ – Yên Minh",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan cổng trời Quản Bạ, núi Đôi Cô Tiên. Trưa: Ăn trưa tại Yên Minh. Chiều: Đến Đồng Văn, nhận phòng khách sạn. Tối: Dạo phố cổ Đồng Văn.",
      },
      {
        day: "Ngày 3",
        title: "Đồng Văn – Mã Pí Lèng",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan cột cờ Lũng Cú – điểm cực Bắc tổ quốc. Trưa: Ăn trưa tại Đồng Văn. Chiều: Chinh phục đèo Mã Pí Lèng, ngắm sông Nho Quế. Tối: Ăn tối và nghỉ đêm tại Mèo Vạc.",
      },
      {
        day: "Ngày 4",
        title: "Hà Giang – Hà Nội",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Ăn sáng, trả phòng. Trưa: Ăn trưa trên đường về. Chiều: Về tới Hà Nội, kết thúc chuyến đi.",
      },
    ],
  },
  {
    title: "Côn Đảo - Thiên Đường Hoang Sơ (3N2Đ)",
    image: "img/tours/halong.jpg",
    images: [
      "img/tours/halong1.jpg",
      "img/tours/chua.png",
      "img/tours/halong1.jpg",
      "img/tours/langbac.webp",
      "img/tours/cualo.webp",
    ],
    priceOld: 12500000,
    priceNew: 10200000,
    code: "CD00111",
    departureDate: "2025-11-25",
    duration: "3 Ngày 2 Đêm",
    stock: 15,
    locationStart: "TP.HCM",
    vehicle: "Máy bay + Cano",
    rating: 4.9,
    reviewsCount: 350,
    status: "Còn chỗ",
    description:
      "Trải nghiệm biển xanh hoang sơ, viếng nghĩa trang Hàng Dương linh thiêng và lặn ngắm san hô tuyệt đẹp tại Côn Đảo.",
    prices: {
      adult: 10200000,
      child: 7800000,
      baby: 4500000,
    },
    schedule: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Côn Đảo",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Bay từ TP.HCM đi Côn Đảo. Trưa: Nhận phòng khách sạn, ăn trưa. Chiều: Tham quan nghĩa trang Hàng Dương, viếng mộ chị Võ Thị Sáu. Tối: Ăn tối và nghỉ ngơi.",
      },
      {
        day: "Ngày 2",
        title: "Khám phá Côn Đảo",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan nhà tù Côn Đảo – địa ngục trần gian. Trưa: Ăn trưa tại nhà hàng. Chiều: Lặn ngắm san hô tại Hòn Bảy Cạnh, tắm biển Đầm Trầu. Tối: Ăn tối, tự do khám phá.",
      },
      {
        day: "Ngày 3",
        title: "Côn Đảo – TP.HCM",
        image: "img/tours/langbac.webp",
        content:
          "Sáng: Tham quan chùa Núi Một, mua đặc sản yến sào, hải sản khô. Trưa: Làm thủ tục trả phòng, ra sân bay về TP.HCM. Kết thúc hành trình.",
      },
    ],
  },
];

async function seedTours() {
  await Tour.deleteMany();
  await Tour.insertMany(tours);
  console.log(" Seed Tours thành công");
}
module.exports = seedTours;
