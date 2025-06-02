# Drugs API Backend

A simple RESTful API built with Express.js to manage a list of drug items. This mini project demonstrates CRUD operations, route validation, and error handling in Node.js.

## Features

- **GET /items** - Retrieve all drug items
- **GET /items/:id** - Retrieve a single drug item by ID
- **POST /items** - Add a new drug item
- **PUT /items/:id** - Update a drug item
- **DELETE /items/:id** - Delete a drug item
- Error handling for invalid routes, bad input, and missing data
- Middleware setup with `express.json()`

---

## Getting Started

### Prerequisites

- Node.js installed (v16 or later)
- `npm` or `yarn` installed

### Installation

```bash
git clone https://github.com/Dev-Iyke/3mtt_darey_software_dev/tree/main/module_3/express-backend-appmodule_2
cd express-backend-app
npm install
```

### Environment Setup

Create a `.env` file in the root with:

```env
PORT=6000
```

### Running the Server

```bash
npm run server
```

The server will start on `http://localhost:6000`.

---

## API Documentation

### Base URL

```
http://localhost:6000
```

---

### `GET /`

Returns a welcome message.

**Example Response**
```json
{
  "message": "Hello, World!"
}
```

---

### `GET /items`

Fetch all drugs.

**Example Response**
```json
{
  "success": true,
  "message": "List of all items",
  "items": [ ... ]
}
```

---

### `GET /items/:id`

Fetch a single drug by ID.

**Request**
```
GET /items/20
```

**Example Response**
```json
{
  "success": true,
  "message": "Selected drug",
  "selectedDrug": [
    {
      "id": 20,
      "name": "Folic Acid",
      "category": "Supplement",
      "dosageMg": 5,
      "isPrescriptionOnly": false,
      "stock": 250,
      "manufacturer": "Nature’s Bounty",
      "description": "B vitamin used to prevent and treat low blood levels of folate and during pregnancy to prevent birth defects."
    }
  ]
}
```

---

### `POST /items`

Add a new drug item.

**Request Body**
```json
{
  "id": 30,
  "name": "Paracetamol",
  "description": "Pain reliever and fever reducer.",
  "otherKeys": "otherValues"
}
```

**Response**
```json
{
  "success": true,
  "message": "Item added successfully",
  "newItem": {
    "id": 30,
    "name": "Paracetamol",
    "description": "Pain reliever and fever reducer.",
    "otherKeys": "otherValues"
  }
}
```

---

### `PUT /items/:id`

Update a drug item.

**Request**
```
PUT /items/30
```

**Request Body**
```json
{
  "name": "Paracetamol Extra",
  "description": "Stronger version of pain relief.",
   "otherKeys": "otherValues"
}
```

**Response**
```json
{
  "success": true,
  "message": "Item updated successfully",
  "updatedItem": {
    "id": 30,
    "name": "Paracetamol Extra",
    "description": "Stronger version of pain relief.",
     "otherKeys": "otherValues"
  }
}
```

---

### `DELETE /items/:id`

Delete a drug by ID.

**Request**
```
DELETE /items/30
```

**Response**
```json
{
  "success": true,
  "message": "Item deleted successfully"
}
```

---

## Error Handling

- **400 Bad Request** – Missing or invalid input
- **200 Success** – successful request
- **201 Created** – Created item
- **404 Not Found** – Item not found
- **500 Internal Server Error** – Unexpected issues

---

## License

MIT
