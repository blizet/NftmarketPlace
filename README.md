# Nft Market Place

This project is an NFT-based decentralized application (DApp) built using Next.js, Express.js, and the Thirdweb SDK. The application allows users to interact with NFTs, leveraging the power of blockchain technology through the Thirdweb platform.

## Project Overview

This DApp provides users with a seamless interface to upload, manage, and interact with NFTs. The backend is powered by Express.js and Mongoose for handling user authentication, data storage, and API endpoints, while the frontend is built using React and Next.js for a dynamic and responsive user experience.

## Features

- **User Authentication**: Secure user login and registration using JWT and bcrypt.
- **NFT Interaction**: Upload, manage, and interact with NFTs using the Thirdweb SDK.
- **Blockchain Integration**: Interact with Ethereum blockchain using ethers.js.
- **Responsive Design**: Frontend built with React and Next.js for a seamless user experience.
- **API Endpoints**: Backend API developed with Express.js to handle data interactions.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v18.12.1 or later
- **NPM**: v8.19.2 or later

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/nftapp.git
   cd nftapp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root directory and configure it with your environment variables, such as database connection strings, JWT secrets, and Thirdweb credentials.

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build the Project**:
   ```bash
   npm run build
   ```

6. **Start the Production Server**:
   ```bash
   npm start
   ```

## Scripts

- **`npm run dev`**: Starts the Next.js development server.
- **`npm run build`**: Builds the project for production.
- **`npm start`**: Starts the application using Nodemon and `server.js`.
- **`npm run lint`**: Runs the linter to check for code quality issues.

## Technologies Used

- **Next.js**: Framework for building server-side rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Express.js**: Web application framework for Node.js.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Thirdweb SDK**: Tools for building Web3 applications.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Bcrypt.js**: Library for hashing passwords.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Additional Packages

- **Cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **File-Saver**: Library for saving files on the client-side.
- **React-Icons**: Library for including popular icons in React projects.
- **React-Router-Dom**: Library for routing in React applications.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Special thanks to the Thirdweb platform for providing the tools to build and manage Web3 applications.
- Thanks to the open-source community for providing the libraries and tools used in this project.
