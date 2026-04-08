# 🚀 Ahoum Sessions Marketplace

A full-stack web application where users can browse, book, and manage sessions with secure authentication and payment integration.

---

## 🔥 Features

* 🔐 Google OAuth Authentication + JWT
* 👥 Role-based Access (User / Creator)
* 📚 Sessions Marketplace (Browse & Create)
* 📅 Booking System (User Dashboard)
* 💳 Razorpay Payment Integration
* 📊 Dashboard (Bookings Overview)
* 🐳 Dockerized Setup

---

## 🏗️ Tech Stack

* Frontend: React.js
* Backend: Django + Django REST Framework
* Database: PostgreSQL / SQLite
* Auth: Google OAuth + JWT
* Payment: Razorpay
* Deployment Ready: Docker

---

## ⚙️ Setup Instructions

```bash
git clone <your-repo-link>
cd ahoum-marketplace

# Backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd ../frontend
npm install
npm start
```

---

## 🔑 Environment Variables (.env)

```
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_SECRET=your_secret
```

---

## 🎯 Demo Flow

1. Login via Google
2. Browse sessions
3. Make payment via Razorpay
4. Book session
5. View bookings in dashboard

---

## 💡 Key Highlights

* Secure API using JWT authentication
* Role-based permission system
* Clean modular architecture (DRF serializers & permissions)
* Integrated payment workflow
* Responsive UI with reusable components

---

## 🚀 Future Improvements

* Admin analytics dashboard
* Email notifications
* Session reviews & ratings
* Payment verification webhook

---

## 👨‍💻 Author

Abhishek
Full Stack Developer
