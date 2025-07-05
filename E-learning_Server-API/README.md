# E-Learning Web Application

## 📌 Overview
ระบบเว็บ E-learning สำหรับการจัดคอร์สออนไลน์ ดูวิดีโอการสอน และสมัครเรียนผ่านระบบชำระเงิน  
รองรับบทบาทผู้ใช้: Student, Instructor, Admin

---

## 🚀 Features
- ลงทะเบียน / เข้าสู่ระบบ
- จัดการโปรไฟล์ผู้ใช้
- สร้างและจัดการคอร์ส
- ดูวิดีโอและเนื้อหาบทเรียน
- สมัครเรียน / ชำระเงิน
- Dashboard ผู้เรียน / ผู้สอน / admin

---

## 🧱 Tech Stack
| Layer       | Tech Used         |
|-------------|-------------------|
| Backend     | Node.js + Express |
| Database    | mySQL             |
| Auth        | JWT               |
| Payment     | Stripe / Omise    |

---

## 📂 Folder Structure
```bash
├── prisma/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── generated/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validation/
│   └── app.js
│   └── server.js
├── .env
├── .gitgnore
├── package-lock.json
├── package.json
└── README.md
```
### env guide
PORT= 8000  
DATABASE_URL="mysql://avnadmin:password@mysql-cf2e19b-ruz-project.j.aivencloud.com:26565/e-learning_project?ssl-mode=REQUIRED"
JWT_SECRET=**  
CLOUDINARY_NAME=**   
CLOUDINARY_API_KEY=**  
CLOUDINARY_API_SECRET=**  

---

## Authentication & User

| Path| Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/authenticate/register` | POST | ❌ | - | - | `{ email, firstName, lastName, password }` | user info |
| `/api/authenticate/login` | POST | ❌ | - | - | `{ email, password }` | token, user info |
| `/api/authenticate/logout` | POST | ✅ | - | - | - | success message |
| `/api/authenticate/forgot-password`| POST | ❌ | - | - | `{ email }` | success message |
| `/api/authenticate/reset-password` | POST | ❌ | - | - | `{ token, newPassword, confirmPassword }` | success message |
| `/api/authenticate/verify-email` | POST | ❌ | - | - | `{ token }` | success message |
| `/api/users/me` | GET | ✅ | - | - | - | current user info |
| `/api/users/me/update/:id` | PUT | ✅ | - | - | `{ Role }` | updated user info |

---

## Student Dashboard

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/dashboard/student` | GET | ✅ | - | - | - | student dashboard data  |
| `/api/enrollments/my-courses` | GET | ✅ | - | - | - | list of enrolled courses|

---

## Instructor Dashboard

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/dashboard/instructor` | GET | ✅ | - | - | - | instructor dashboard data |
| `/api/instructor/courses` | GET | ✅ | - | - | - | instructor's courses |
| `/api/instructor/new-courses` | POST | ✅ | - | - | `{ title, description, price, ... }` | new course info  |
| `/api/instructor/students` | GET | ✅ | - | courseId| - | list of students in course|

---

## Admin Dashboard

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/dashboard/admin` | GET | ✅ | - | - | - | admin dashboard data |
| `/api/admin/all-users` | GET | ✅ | - | role  | - | list of users |
| `/api/admin/users/:id` | PATCH  | ✅ | id | - | `{ role }` | updated user info |
| `/api/admin/users/:id` | DELETE | ✅ | id | - | - | success message |
| `/api/admin/courses` | GET | ✅ | - | - | - | list of courses |
| `/api/admin/courses/:id/status` | PATCH | ✅ | - | - | - | update status courses |
| `/api/admin/courses/:id` | DELETE | ✅ | id | - | - | success message |
| `/api/admin/transactions` | GET | ✅ | - | - | - | payment transactions  |


---

## Course & Category

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/courses` | GET | ❌ / ✅ (opt) | - | - | - | list of courses |
| `/api/courses/:id` | GET | ❌ / ✅ (opt)  | id | - | - | course detail |
| `/api/courses` | POST | ✅ | - | - | `{ title, description, price, ... }` | new course info |
| `/api/courses/:id` | PUT | ✅ | id | - | `{ title, description, price, ... }` | updated course info|
| `/api/courses/:id` | DELETE | ✅ | id | - | - | success message |
| `/api/all-categories` | GET | ❌ / ✅ (opt) | - | - | - | list of categories |
| `/api/new-categories` | POST | ✅ | - | - | `{ name, description }` | new category info |

---

## Lessons

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/courses/:id/lessons` | GET | ❌ / ✅ (opt) | id | - | - | list of lessons |
| `/api/lessons/:id` | GET | ❌ / ✅ (opt)  | id | - | - | lesson detail |
| `/api/courses/:id/lessons` | POST | ✅ | id | - | `{ title, description, video_url, order_in_course }` | new lesson info |
| `/api/lessons/:id` | PUT | ✅ | id | - | `{ title, description, video_url, order_in_course }` | updated lesson info|
| `/api/lessons/:id` | DELETE | ✅ | id | - | - | success message |

---

## Enrollment

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/enrollments/:courseId` | POST | ✅   | courseId  | -     | -    | enrollment info     |
| `/api/enrollments/my-enroll`         | GET | ✅   | -         | -     | -    | enrolled courses    |
| `/api/lessons/:lessonId/complete` | PATCH | ✅  | lessonId  | -     | -    | success message     |

---

## Payment

| Path | Method | Auth | Params  | Query | Body | Response |
|:-- |:-- |:-- |:-- |:-- |:-- |:-- |
| `/api/payments` | POST | ✅ | - | - | `{ enrollmentId, amount, payment_method, ... }` | payment info |
| `/api/payments/all-history` | GET | ✅ | - | - | - | payment history |
| `/api/payments/history` | GET | ✅ | - | - | - | payment history |

---

## Notes
- Authentication (`authenticate`) = ✅ ต้องส่ง Token, ❌ ไม่ต้องส่ง
- `(opt)` หมายถึง optional คือ อนุญาตให้ไม่ล็อกอินก็เรียกได้ในบางกรณี เช่น ดูคอร์สฟรีหรือข้อมูลสาธารณะ
- `Params` = ตัวแปรใน URL path เช่น `:id`
- `Query` = ตัวแปรใน URL query string เช่น `?role=admin`

---