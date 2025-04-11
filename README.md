# MiniExpress.js

A minimal version of Express.js built with raw Node.js — designed to help understand how web frameworks work behind the scenes.

## 🚀 Why I Built This

While learning backend development, I wanted to understand what happens under the hood of frameworks like Express. So I challenged myself to build my own HTTP server with basic routing, file serving, and JSON response capabilities.

##  Features

- Custom routing system with `.route(method, path, handler)`
- Static file serving (HTML, CSS, JS, images)
- JSON response utility with `.sendJson()`
- Lightweight and clean architecture (no hardcoded logic inside the framework)

## 📂 Project Structure

/public
├── index.html
├── style.css
└── script.js
/Gallery
├── cr5m2.jpg
├── img2.jpg
└── img3.jpg
miniexpress.js
index.js

##  Demo Feature

Includes a mini front-end project where clicking a button randomly switches between images served from different routes using your custom MiniExpress server.

## 🧪 How to Run

1. Clone the repo:

```bash
git clone https://github.com/yourusername/miniexpress.git
cd miniexpress

node index.js

http://localhost:3000
