# Dự án cuối kỳ môn Lập trình mạng - Nhóm 10

**Trường:** Đại học Giao thông Vận tải TP Hồ Chí Minh
**Thành viên nhóm:**

- Đặng Duy Khánh
- Nguyễn Thanh Khiêm 
- Lê Đức Quang Huy
- Nguyễn Chí Cương
- Trần Như Gia Bảo


**Giảng viên hướng dẫn:** Bùi Dương Thế

# Chat App with React, Node.js, Socket.io - Lập trình ứng dụng Chat 

## 🚀 Tính năng mới
- ** Xác thực JWT tùy chỉnh (không cần xác thực của bên thứ 3)
- ** Nhắn tin theo thời gian thực qua Socket.io
- ** Chỉ báo trạng thái trực tuyến/ngoại tuyến
- ** Âm thanh thông báo và gõ phím (có nút bật/tắt)
- ** Tải ảnh lên (Cloudinary)
- ** REST API với Node.js & Express
- ** MongoDB để lưu trữ dữ liệu
- ** Giới hạn tốc độ API được hỗ trợ bởi Arcjet
- ** Giao diện người dùng đẹp mắt với React, Tailwind CSS & DaisyUI
- ** Zustand để quản lý trạng thái

### Bảng user

```
users(
  id TEXT PRIMARY KEY,                -- Mã định danh duy nhất của người dùng (ObjectId)
  full_name TEXT,                     -- Họ và tên người dùng
  email TEXT UNIQUE,                  -- Địa chỉ email đăng ký
  password TEXT,                      -- Mật khẩu (được mã hoá bằng bcrypt)
  profile_pic TEXT,                   -- Ảnh đại diện (nếu có)
  created_at TIMESTAMP,               -- Thời gian tạo tài khoản
  updated_at TIMESTAMP                -- Thời gian cập nhật thông tin
);
```

### Bảng messages

```
messages(
  id TEXT PRIMARY KEY,                -- Mã định danh tin nhắn (ObjectId)
  sender_id TEXT,                     -- ID người gửi (tham chiếu đến bảng users)
  receiver_id TEXT,                   -- ID người nhận (tham chiếu đến bảng users)
  content TEXT,                       -- Nội dung tin nhắn
  created_at TIMESTAMP,               -- Thời gian gửi tin nhắn
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (receiver_id) REFERENCES users(id)
);
```


## 🛠️ Cài đặt và chạy

.env Setup

### Backend (`/backend`)

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev

