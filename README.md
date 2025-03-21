# 🚀 E-commerce AI

## 📌 Giới thiệu

E-commerce AI là một ứng dụng web tích hợp trí tuệ nhân tạo, giúp người dùng:

- **Phân loại ảnh**: Tải ảnh lên và nhận diện sản phẩm thông qua AI.
- **Phân tích nhận xét**: Đánh giá cảm xúc của khách hàng dựa trên nhận xét.
- **Gợi ý sản phẩm**: Cung cấp đề xuất sản phẩm dựa trên từ khóa tìm kiếm.

Ứng dụng được xây dựng với **ReactJS (Ant Design)** cho frontend và sử dụng **ExpressJS + AI (TensorFlow, Hugging Face API)** cho backend.

---

## 🛠️ Công nghệ sử dụng

- **Frontend**: ReactJS, Ant Design
- **Backend**: Python, TensorFlow, Hugging Face API
- **Deploy**: Vercel (Frontend), Render (Backend)

---

## 🚀 Cài đặt và chạy dự án

### 1️⃣ Yêu cầu

- Node.js >= 16.x
- npm hoặc yarn

### 2️⃣ Clone repository

```sh
 git clone https://github.com/phantuanthanh1582000/frontend_ai_final.git
```

### 3️⃣ Cài đặt dependencies

```sh
npm install  # Hoặc yarn install
```

### 4️⃣ Chạy ứng dụng

```sh
npm start  # Hoặc yarn start
```

Sau khi chạy, mở trình duyệt và truy cập: `http://localhost:3000`

---

## 📌 Hướng dẫn sử dụng

### 🔍 Phân loại ảnh

1. Nhấn vào nút `Tải ảnh lên` để chọn ảnh.
2. Hệ thống sẽ phân loại ảnh và hiển thị kết quả với độ chính xác.

### 📝 Phân tích nhận xét

1. Nhập nhận xét của bạn vào ô nhập liệu.
2. Nhấn `Phân tích` để xem kết quả đánh giá AI về nhận xét.

### 🎯 Gợi ý sản phẩm

1. Nhập từ khóa sản phẩm cần tìm kiếm.
2. Nhấn `Nhận gợi ý`, hệ thống sẽ đề xuất các sản phẩm phù hợp.

---

## 🌍 API Backend

**Base URL:** `https://backend-ai-final.onrender.com`

### 📌 Endpoints

- **POST `/classify_image`**: Nhận diện sản phẩm từ ảnh tải lên.
- **POST `/analyze_review`**: Phân tích cảm xúc từ nhận xét của khách hàng.
- **POST `/recommend_products`**: Gợi ý sản phẩm dựa trên từ khóa.

---

## 🌍 Deploy

- **Frontend**: [https://frontend-ai-final.vercel.app/](https://frontend-ai-final.vercel.app/)
- **Backend**: [https://backend-ai-final.onrender.com](https://backend-ai-final.onrender.com)

---

## 📜 License

MIT License.

---

## ✨ Tác giả

**Phan Tuan Thanh**  
📧 Email: tphan10932@gmail.com  
🔗 GitHub: [phantuanthanh1582000](https://github.com/phantuanthanh1582000)
