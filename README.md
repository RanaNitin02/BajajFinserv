# 🧠 BFHL API – Bajaj Finserv Health Lab (Chitkara Assignment)

A REST API built using **Node.js** and **Express** that accepts an array of strings and processes them into categorized output as per the **BFHL Full Stack assignment** specifications.

---

## 📌 Features

- Accepts POST requests at `/bfhl` with an array of strings.
- Returns:
  - Status (`is_success`)
  - User details (from `.env`)
  - Categorized arrays:
    - Even numbers
    - Odd numbers
    - Alphabets (converted to uppercase)
    - Special characters
  - Sum of numbers (as string)
  - Concatenation of all alphabets (in reverse order with alternating caps)

---

## 🚀 Endpoint

### Method: `POST`  
### Route: `/bfhl`  
### Content-Type: `application/json`


🛠️ Technologies Used
Node.js
Express.js
dotenv (for environment variable management)

📁 Project Structure
bfhl-api/
├── config/            # Configuration loader (.env)
├── controllers/       # Controller logic
├── routes/            # Express routes
├── utils/             # Core data processing logic
├── .env               # User and port details
├── index.js           # App entry point
└── package.json


#### 📥 Sample Request:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

📤 Sample Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```
