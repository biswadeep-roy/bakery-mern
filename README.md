
# Heavenly Bites by Biswadeep

Welcome to the Heavenly Bites by Biswadeep repository! This project is a MERN stack application for a bakery store, providing a delightful online experience to order your favorite baked goods.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
  - [Homepage](#homepage)
  - [Menu](#menu)
  - [Cart](#cart)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Browse and search bakery products
- Add products to the cart
- Secure checkout process with Stripe integration
- Responsive design for all devices

## Tech Stack

**Frontend:**
- React
- Redux
- Tailwind CSS

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/biswadeep-roy/bakery-mern.git
   ```

2. Navigate to the project directory
   ```bash
   cd bakery-mern
   ```

3. Install dependencies for both frontend and backend
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables
   ```env
   MONGODB_URL=<your_mongodb_url>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   REACT_APP_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
   REACT_APP_SERVER_DOMIN=<your_server_domain>
   FRONTEND_URL=<your_frontend_url>
   ```

## Usage

1. Start the backend server
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Pages

### Homepage

The homepage showcases the bakery's special products and provides an overview of the services offered. It includes a carousel of featured products and links to different sections of the site.

### Menu

The menu page displays a list of all available bakery products with filtering options. Users can browse through different categories and view detailed descriptions of each product.

### Cart

The cart page allows users to review their selected items, update quantities, and proceed to checkout. It provides a summary of the total cost and integrates with Stripe for secure payments.

## Contributing

We welcome contributions to improve this project! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to Biswadeep Roy at biswadeep@example.com.

---

Thank you for visiting Heavenly Bites by Biswadeep! Enjoy your sweet escape!
