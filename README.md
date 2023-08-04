# LibraryAPIBackend - README

Welcome to the **LibraryAPIBackend** repository! This project serves as an API backend for a library management system. It's built using Node.js, Express.js, and MongoDB. Follow the instructions below to set up and run the application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: Make sure you have Node.js installed. You can download it from the official [Node.js website](https://nodejs.org/).

## Getting Started

1. **Clone the Repository:** Start by cloning this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/tharindud02/library-API-backend.git
   ```

2. **Navigate to the Directory:** Change your current working directory to the project folder:

   ```bash
   cd LibraryAPIBackend
   ```

3. **Install Dependencies:** Install the project dependencies by running:

   ```bash
   npm install
   ```

## Configuration

`(env file is already on repo)`

1. **Environment Variables:** Create a `.env` file in the project directory and define the following environment variables:

   ```env
   PORT=4000

   ```

## Running the Application

You can run the application in development or production mode.

- **Development Mode:** Run the following command to start the application with nodemon for automatic restart on file changes:

  ```bash
  npm run start-dev
  ```

- **Production Mode:** Run the following command to start the application in production mode:

  ```bash
  npm run start-prod
  ```

Once the application is running, you should see output indicating that the server is listening on the specified port (default is 3000).

## Using the API

The API provides endpoints to manage library resources such as books, users, and more. Refer to the documentation or codebase for details on the available routes and functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or issues, feel free to contact the author at tharindud02@gmail.com.

---

Thank you for using the **LibraryAPIBackend**! We hope this backend system helps you manage your library resources effectively.
