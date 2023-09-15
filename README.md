# Cloudinary Node.js Image Uploader

A simple Node.js application for uploading images to Cloudinary. This project demonstrates how to integrate Cloudinary with a Node.js server to handle image uploads.

## Table of Contents
- [Cloudinary Node.js Image Uploader](#cloudinary-nodejs-image-uploader)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## About

This Node.js application allows you to upload images directly to Cloudinary, a cloud-based image and video management service. It provides a simple API endpoint for image uploads and demonstrates how to use the Cloudinary Node.js SDK to handle image processing and storage.

## Features

- Upload images to Cloudinary from your Node.js application.
- Demonstrates integration with the Cloudinary Node.js SDK.
- Provides a basic example of handling image uploads in a Node.js server.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (>= version 12)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- Cloudinary account credentials (cloud_name, api_key, api_secret)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FrancisCNwabueze/cloudinary-nodejs-image-uploader.git
   ```

2. Change to the project directory:

   ```bash
   cd cloudinary-nodejs-image-uploader
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure Cloudinary:

   Open `app.js` and replace `'your_cloud_name'`, `'your_api_key'`, and `'your_api_secret'` with your actual Cloudinary account details.

5. Start the server:

   ```bash
   npm start
   ```

## Usage

1. Send a POST request to `http://localhost:4000/api/upload` with an image file attached as the 'image' field in the request body. You can use tools like Postman or `curl` for testing.

2. The server will upload the image to Cloudinary and respond with the image URL and public ID.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and test thoroughly.
- Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out to the author:

- Author: Francis C. Nwabueze
- Email: [soundxcode@gmail.com](mailto:soundxcode@gmail.com)