# 🔥 Hướng Dẫn Setup Firebase

## 📋 Thông Tin Project

**Project ID**: `cloud-quiz-app-98ad4`
**Console URL**: https://console.firebase.google.com/project/cloud-quiz-app-98ad4

## 🚀 Các Bước Setup

### 1. Kích Hoạt Authentication

1. Vào [Authentication Console](https://console.firebase.google.com/project/cloud-quiz-app-98ad4/authentication/providers)
2. Kích hoạt **Email/Password** provider
3. Kích hoạt **Google** provider và chọn email hỗ trợ

### 2. Tạo Realtime Database

1. Vào [Database Console](https://console.firebase.google.com/project/cloud-quiz-app-98ad4/database)
2. Tạo "Realtime Database" với region **Singapore**
3. Copy và paste Database Rules:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "quiz-sessions": {
      "$sessionId": {
        ".read": "data.child('userId').val() === auth.uid",
        ".write": "data.child('userId').val() === auth.uid || !data.exists()"
      }
    }
  }
}
```

### 3. Test Setup

1. Mở `index.html` trong browser
2. Thử đăng ký/đăng nhập
3. Kiểm tra dữ liệu trong Firebase Console

## 🔧 Lỗi Thường Gặp

- **Google Sign-In không hoạt động**: Đảm bảo ứng dụng chạy trên HTTP server, không phải file://
- **Permission denied**: Kiểm tra Database Rules đã được cập nhật
- **Network error**: Kiểm tra kết nối internet