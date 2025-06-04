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
- Docker and Docker Compose
- Git

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

## 🐳 Docker Deployment

1. Make sure no other MySQL instance is running on port 3306. If you have a local MySQL instance, you can either:
   - Stop it temporarily
   - Or use the Docker setup which uses port 3307 instead

2. Build and run using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- API (Local): http://localhost:3000
- API (Deployed): https://school-management-api-ye7e.onrender.com/
- MySQL (Local Docker): localhost:3307

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

To test the deployed API (available at [https://school-management-api-ye7e.onrender.com/](https://school-management-api-ye7e.onrender.com/)), update the base URL in your Postman collection from `http://localhost:3000` to the deployed URL.

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

## 🔧 Troubleshooting

### Port Conflicts
If you encounter port conflicts:
1. For MySQL (3306):
   - The Docker setup uses port 3307 to avoid conflicts
   - If you need to use a different port, modify the `docker-compose.yml` file
2. For API (3000):
   - If port 3000 is in use, modify the port mapping in `docker-compose.yml`

### Database Connection
- The API service connects to the database using the service name `db`
- If running locally without Docker, update the DB_HOST in `.env` to `localhost`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.