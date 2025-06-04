# School Management API

A Node.js API service for managing school data with location-based functionality. This API allows users to add new schools and retrieve a sorted list of schools based on proximity to a specified location.

## 🚀 Features

- Add new schools with location data
- List schools sorted by proximity to user's location
- MySQL database integration
- Input validation
- Docker support for easy deployment

## 🛠️ Tech Stack

- **Backend:** Node.js with Express.js
- **Database:** MySQL
- **Containerization:** Docker
- **Environment Variables:** dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- MySQL
- Docker (optional, for containerized deployment)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/tejaspokale22/school-management-api.git
cd school-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school_management
```

4. Start the server:
```bash
npm start
```

## 🐳 Docker Deployment

Build and run using Docker Compose:
```bash
docker-compose up --build
```

## 📚 API Endpoints

### Add School
- **Endpoint:** `/api/addSchool`
- **Method:** POST
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.3456,
    "longitude": 78.9012
  }
  ```
- **Validation:**
  - All fields are required
  - Latitude and longitude must be valid numbers
  - Name and address must be non-empty strings

### List Schools
- **Endpoint:** `/api/listSchools`
- **Method:** GET
- **Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Response:** Returns schools sorted by proximity to the specified location

## 📦 Project Structure

```
school-management-api/
├── config/           # Database configuration
├── controllers/      # Route controllers
├── routes/          # API routes
├── app.js           # Express app setup
├── Dockerfile       # Docker configuration
├── docker-compose.yml
└── package.json
```

## 🧪 Testing

The API can be tested using the provided Postman collection. The collection includes:
- Example requests for both endpoints
- Expected response formats
- Test cases for validation

## 📝 Database Schema

### Schools Table
```sql
CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
