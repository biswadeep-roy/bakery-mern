
# Cake Heaven Bakery MERN Application

Welcome to the Cake Heaven Bakery MERN application! This project is a full-stack web application designed to manage and showcase the delicious offerings of Cake Heaven, your one-stop destination for delightful and mouth-watering cakes. Built using the MERN stack (MongoDB, Express, React, Node.js), this application ensures seamless and efficient management of bakery operations and an engaging user experience.

## Features

- **User Authentication:** Secure user authentication with JWT for protected routes and actions.
- **Product Management:** Admin interface for managing products, including adding, updating, and deleting cake items.
- **Order Management:** Users can place orders, and admins can manage and update order statuses.
- **Responsive Design:** A beautiful and responsive design ensures a great user experience on both desktop and mobile devices.
- **Real-time Updates:** Leveraging WebSockets for real-time updates on order status and inventory changes.
- **Interactive UI:** Enhanced user experience with React, Redux, and various UI libraries.
- **Search and Filter:** Users can search for specific products and filter results based on categories and price ranges.
- **Ratings and Reviews:** Customers can leave ratings and reviews for products, providing valuable feedback and insights.
- **Payment Integration:** Secure payment gateway integration for seamless online transactions.

## Technology Stack

- **Frontend:**
  - React.js
  - Redux for state management
  - React Router for navigation
  - Axios for API calls
  - Tailwind CSS for styling

- **Backend:**
  - Node.js with Express.js
  - MongoDB with Mongoose for database management
  - JWT for authentication
  - WebSockets for real-time updates

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/biswadeep-roy/bakery-mern.git
   cd bakery-mern
   ```

2. **Setup the server:**
   ```bash
   cd server
   npm install
   ```

3. **Setup the client:**
   ```bash
   cd client
   npm install
   ```

4. **Environment Variables:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. **Run the application:**
   - **Backend:** In the `server` directory, run:
     ```bash
     npm start
     ```
   - **Frontend:** In the `client` directory, run:
     ```bash
     npm start
     ```

6. **Access the application:** Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
/bakery-mern
├── /client         # React frontend
│   ├── /public     # Public assets
│   ├── /src        # Source files
│   │   ├── /components  # React components
│   │   ├── /redux       # Redux files
│   │   ├── /styles      # Styling files
│   │   ├── /utils       # Utility functions
│   │   └── index.js     # Entry point
│   └── package.json
├── /server         # Express backend
│   ├── /config     # Configuration files
│   ├── /controllers # Controller functions
│   ├── /models     # Mongoose models
│   ├── /routes     # API routes
│   ├── /middleware # Middleware functions
│   └── server.js   # Entry point
└── package.json
```

## Screenshots

### Home Page
![Home Page](client/src/images/homepage.png)

### Product Page
![Product Page](client/src/images/productpage.png)

### Admin Dashboard
![Admin Dashboard](client/src/images/admindashboard.png)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the project's coding standards and include detailed descriptions of your modifications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to:

- **Biswadeep Roy**
  - [GitHub](https://github.com/biswadeep-roy)
  - [LinkedIn](https://www.linkedin.com/in/biswadeep-roy/)
  - [Email](mailto:biswadeep.roy@example.com)

---

Made with ❤️ by Biswadeep Roy
