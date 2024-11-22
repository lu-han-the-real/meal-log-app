# Meal Log App

Meal Log App is a web application designed to help users track their meals and nutritional intake. This README provides instructions for setting up and running the application locally.

## Table of Contents

- [Meal Log App](#meal-log-app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
    - [Node.js and npm](#nodejs-and-npm)
    - [Go](#go)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

### Node.js and npm

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm, which is Node.js's package manager.
  - **Windows/MacOS**: Use the installer from the website.
  - **Linux**: You can use a package manager like `apt`:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

### Go

- **Go**: Download and install Go from [golang.org](https://golang.org/).
  - **Windows/MacOS**: Use the installer from the website.
  - **Linux**: You can use a package manager like `apt`:
    ```bash
    sudo apt update
    sudo apt install golang
    ```

## Installation

1. **Clone the Repository**

   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/meal-log-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd meal-log-app
   ```

3. **Install Frontend Dependencies**

   Navigate to the `web` directory and install the dependencies:

   ```bash
   cd web
   npm install
   ```

4. **Install Backend Dependencies**

   Navigate to the backend directory and install the dependencies:

   ```bash
   cd ../backend
   go mod tidy
   ```

## Running the Application

1. **Start the Backend Server**

   In the `backend` directory, run the following command to start the server:

   ```bash
   go run main.go
   ```

2. **Start the Frontend Development Server**

   In the `web` directory, run the following command to start the React development server:

   ```bash
   npm start
   ```

3. **Access the Application**

   Open your web browser and go to `http://localhost:3000` to access the application.

## Project Structure

- **web/**: Contains the frontend React application.
- **backend/**: Contains the Go backend server code.
- **db/**: Database-related files and migrations.
- **pkg/**: Contains shared packages and configurations.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
