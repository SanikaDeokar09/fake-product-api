# Fake Product API

A simple, public-style API that returns fake e-commerce products.
Useful for frontend developers, UI demos, React projects, and testing.

---

##Endpoints

### Get a random product
GET /product/random

### Get 10 random products
GET /products/ten

### Get any number of random products
GET /products/random/<count>

Examples:
- /products/random/5  
- /products/random/20  

### Get product categories
GET /categories

### Get products by category
/products/<category>

Example:
- /products/electronics  
- /products/wearables  

### ✔ Get product by ID
/product/<id>

---

## Product Format Example

{
  "id": 101,
  "title": "Wireless Headphones",
  "price": 1299,
  "category": "electronics",
  "rating": 4.3,
  "stock": 42,
  "image": "https://example.com/headphones.jpg"
}

---

## 🛠 How to Use This API
You can integrate it with:
✔ React  
✔ JavaScript  
✔ Postman  
✔ Axios / Fetch  
✔ UI demos  

---

## Project Structure
fake-product-api/
│── index.js  
│── products/index.json  
│── package.json  

---

## 🚀 Hosting
You can upload this API on apihub.digital or any free hosting provider.

