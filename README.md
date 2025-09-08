# 📚 Hệ Thống Thi Trắc Nghiệm Đa Chủ Đề v2.0

Một ứng dụng web thi trắc nghiệm với giao diện hiện đại, hỗ trợ đa chủ đề và tích hợp Firebase để theo dõi người dùng.

## 📋 Tác Giả

**Nguyễn Huy Điền**

## 🔥 **MỚI** - Tính Năng v2.0

### 🔐 **Xác Thực Người Dùng**
- **Đăng ký/Đăng nhập** với email và mật khẩu
- **Đăng nhập Google** nên lọng và tiện lợi 🚀
- **Theo dõi phiên làm bài** với Firebase Authentication
- **Lưu trữ thông tin** người dùng an toàn

### 📊 **Theo Dõi & Thống Kê**
- **Lịch sử thi** chi tiết của từng người dùng
- **Thống kê cá nhân**: tổng số bài, điểm trung bình, điểm cao nhất
- **Phân tích theo chủ đề** Python và Open Source
- **Lưu trữ kết quả** thời gian thực với Firebase Realtime Database

### 🎯 **Đa Chủ Đề**
- **Lập Trình Python** 🐍: 129 câu hỏi từ cơ bản đến nâng cao
- **Phát Triển Phần Mềm Nguồn Mở** 🌟: 50 câu hỏi về FOSS, Git, GitHub, Licenses

## ✨ Tính Năng Chính

### 🎯 Tính Năng Thi
- **40 câu hỏi ngẫu nhiên** được chọn từ ngân hàng câu hỏi phong phú
- **Thời gian làm bài: 60 phút** với đồng hồ đếm ngược trực quan
- **Điều hướng linh hoạt** giữa các câu hỏi
- **Lưu trạng thái câu trả lời** khi chuyển đổi giữa các câu
- **Cảnh báo thời gian** khi còn 5 phút cuối
- **Xác nhận nộp bài** với thông báo số câu chưa trả lời

### 🎨 Giao Diện Người Dùng
- **Thiết kế hiện đại** với theme xanh dương và trắng
- **Responsive design** tương thích với mọi thiết bị
- **Hiệu ứng động** mượt mà và chuyên nghiệp
- **Biểu tượng trực quan** giúp dễ dàng sử dụng
- **Giao diện tiếng Việt** thân thiện với người dùng Việt Nam

### 📊 Hệ Thống Đánh Giá
- **Tính điểm tự động** với phần trăm chính xác
- **Phân loại kết quả** theo mức độ thành tích:
  - 🏆 Xuất sắc (≥90%): "Xuất sắc! Bạn có kiến thức Python rất tốt!"
  - 🎉 Tốt (80-89%): "Tốt lắm! Bạn đã nắm vững kiến thức Python!"
  - 👍 Khá (60-79%): "Khá tốt! Bạn cần ôn luyện thêm một số kiến thức."
  - 📚 Cần cố gắng (<60%): "Cần cố gắng hơn! Hãy ôn lại kiến thức Python cơ bản."

### 🔍 Tính Năng Xem Lại
- **Xem chi tiết từng câu** với đáp án đúng/sai
- **Giải thích đáp án** cho từng câu hỏi
- **Phân tích kết quả** theo từng chủ đề
- **Màu sắc phân biệt** câu đúng/sai rõ ràng

### 🖨️ Tính Năng In Ấn
- **In đề thi**: Xuất đề thi ra giấy để làm bài thủ công
- **In kết quả**: Phiếu điểm chi tiết với thống kê
- **In đáp án chuẩn**: Bảng đáp án đầy đủ cho giáo viên
- **In báo cáo thống kê**: Phân tích chi tiết về kết quả

### ⚙️ Tính Năng Quản Lý
- **Reset câu trả lời**: Xóa đáp án câu hiện tại
- **Hủy bài thi**: Thoát khỏi bài thi với xác nhận
- **Thi lại**: Bắt đầu bài thi mới với câu hỏi khác
- **Phím tắt**: Hỗ trợ điều khiển bằng bàn phím

## 🏗️ Cấu Trúc Dự Án

```
quiz-app/
├── index.html          # Giao diện chính của ứng dụng
├── script.js           # Logic xử lý quiz và tương tác
├── questions.js        # Ngân hàng câu hỏi Python
├── style.css           # Thiết kế giao diện và hiệu ứng
└── README.md           # Tài liệu hướng dẫn
```

## 🚀 Hướng Dẫn Cài Đặt

### Bước 1: Cài Đặt Cơ Bản
1. **Tải dự án** về máy hoặc clone repository
2. **Mở file `index.html`** trong trình duyệt web

### Bước 2: Cấu Hình Firebase (Đợc quyền từ tác giả)

**🎉 Tin tốt! Firebase đã được cấu hình sẵn với project thực tế!**

**Project Firebase**: `cloud-quiz-app-98ad4`
**Console URL**: https://console.firebase.google.com/project/cloud-quiz-app-98ad4

#### Chỉ cần thực hiện 2 bước:

🔴 **Bước 2.1: Kích hoạt Authentication**
1. Vào [Authentication Console](https://console.firebase.google.com/project/cloud-quiz-app-98ad4/authentication/providers)
2. Click tab "Sign-in method" 
3. Kích hoạt **Email/Password** provider
4. Kích hoạt **Google** provider và chọn email hỗ trợ

🔴 **Bước 2.2: Tạo Realtime Database**
1. Vào [Database Console](https://console.firebase.google.com/project/cloud-quiz-app-98ad4/database)
2. Tạo "Realtime Database" nếu chưa có
3. Chọn region: **Singapore** (gần Việt Nam nhất)
4. Copy Database Rules từ file `firebase-config.js`

#### 📄 Chi tiết setup: Đọc file [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)

### Bước 3: Test Ứng Dụng

1. **Mở `index.html`** trong trình duyệt
2. **Test đăng ký**: Tạo tài khoản mới với email hợp lệ
3. **Test đăng nhập**: Đăng nhập với tài khoản vừa tầo
4. **Test quiz**: Chọn chủ đề và làm thử một bài thi
5. **Kiểm tra dữ liệu**: Vào Firebase Console để xem dữ liệu đã được lưu

👍 **Nếu mọi thứ hoạt động**: Chúc mừng! Ứng dụng đã sẵn sàng!
👎 **Nếu có lỗi**: Đọc file [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md) để troubleshooting

---

## 📊 Hướng Dẫn Sử Dụng
1. **Đọc hướng dẫn** trên màn hình chào mừng
2. **Nhấn "Bắt Đầu Thi"** để khởi động bài thi
3. **Đọc câu hỏi** và chọn đáp án đúng nhất
4. **Sử dụng nút điều hướng** hoặc click số thứ tự câu để chuyển câu
5. **Theo dõi thời gian** còn lại trên đồng hồ đếm ngược
6. **Nhấn "Nộp Bài"** khi hoàn thành hoặc hết giờ

### Phím Tắt Hữu Ích
- **Mũi tên trái/phải**: Chuyển câu trước/sau
- **Số 1-4**: Chọn đáp án A, B, C, D
- **R**: Reset câu trả lời hiện tại
- **Esc**: Hủy bài thi

## 💻 Công Nghệ Sử Dụng

### Frontend
- **HTML5**: Cấu trúc trang web semantic
- **CSS3**: Thiết kế responsive với animations
- **JavaScript ES6+**: Logic xử lý và tương tác
- **Tailwind CSS**: Framework CSS utility-first

### Tính Năng Kỹ Thuật
- **Local Storage**: Lưu trạng thái tạm thời
- **Responsive Design**: Tương thích đa thiết bị
- **Print Friendly**: Tối ưu cho việc in ấn
- **Progressive Enhancement**: Hoạt động mượt mà trên mọi trình duyệt

## 📚 Ngân Hàng Câu Hỏi

Ứng dụng hiện có **50+ câu hỏi Python** bao gồm:

### 🔤 Cú Pháp Cơ Bản
- Biến và kiểu dữ liệu
- Toán tử và biểu thức
- Cấu trúc điều khiển
- Comment và docstring

### 📦 Cấu Trúc Dữ Liệu
- List, Tuple, Dictionary, Set
- String manipulation
- Comprehensions
- Built-in functions

### 🔧 Lập Trình Nâng Cao
- Functions và Lambda
- Classes và Objects
- Exception Handling
- Modules và Packages

### 🛠️ Công Cụ và Thư Viện
- File I/O operations
- Regular Expressions
- Virtual Environment
- Package Management (pip)

## 🔧 Tùy Chỉnh và Mở Rộng

### Thêm Câu Hỏi Mới
Mở file `questions.js` và thêm câu hỏi theo format:

```javascript
{
    id: 51,
    question: "Câu hỏi của bạn?",
    options: [
        "A. Đáp án A",
        "B. Đáp án B", 
        "C. Đáp án C",
        "D. Đáp án D"
    ],
    correct: 0, // Index của đáp án đúng (0-3)
    explanation: "Giải thích chi tiết câu trả lời"
}
```

### Thay Đổi Cài Đặt
Trong file `script.js`, bạn có thể tùy chỉnh:
- **Số câu hỏi**: Thay đổi `getRandomQuestions(40)`
- **Thời gian thi**: Thay đổi `this.timeRemaining = 60 * 60`
- **Cảnh báo thời gian**: Thay đổi `this.timeRemaining <= 300`

### Tùy Chỉnh Giao Diện
Trong file `style.css`, bạn có thể:
- Thay đổi màu sắc theme
- Điều chỉnh fonts và sizes
- Tùy chỉnh animations

## 🌟 Điểm Nổi Bật

### Trải Nghiệm Người Dùng
- **Giao diện trực quan** với biểu tượng emoji sinh động
- **Phản hồi tức thì** với hiệu ứng hover và click
- **Thông báo rõ ràng** về trạng thái và kết quả
- **Dễ sử dụng** cho cả học sinh và giáo viên

### Tính Năng Giáo Dục
- **Học tập chủ động** với xem lại đáp án
- **Đánh giá khách quan** với hệ thống tính điểm
- **Tiện ích in ấn** cho môi trường lớp học truyền thống
- **Phân tích chi tiết** giúp cải thiện kiến thức

### Kỹ Thuật Ưu Việt
- **Code sạch** và dễ bảo trì
- **Hiệu suất cao** với xử lý client-side
- **Tương thích** với mọi trình duyệt hiện đại
- **Mở rộng dễ dàng** cho các chủ đề khác

## 📱 Tương Thích

### Trình Duyệt
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Thiết Bị
- 💻 Desktop/Laptop
- 📱 Mobile phones
- 📲 Tablets
- 🖥️ Large screens

## 📄 Giấy Phép

Dự án này được phát triển cho mục đích giáo dục. Bạn có thể tự do sử dụng, chỉnh sửa và phân phối với điều kiện ghi rõ nguồn gốc.

## 🤝 Đóng Góp

Mọi đóng góp để cải thiện ứng dụng đều được chào đón:
- Báo cáo lỗi và đề xuất tính năng
- Thêm câu hỏi mới và cải thiện nội dung
- Tối ưu hóa giao diện và trải nghiệm người dùng
- Dịch thuật sang các ngôn ngữ khác

## 📞 Liên Hệ

**Tác giả**: Nguyễn Huy Điền  
**Dự án**: Ứng Dụng Thi Trắc Nghiệm Python  
**Năm phát triển**: 2025

---

*"Học Python chưa bao giờ thú vị đến thế! 🐍✨"*