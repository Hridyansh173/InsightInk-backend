InsightInk Backend
Welcome to the InsightInk backend repository! This project serves as the server-side application for our blog platform, handling all the necessary operations to create, read, update, and delete blog posts. It also manages user authentication to ensure secure access to the platform.

Features

User Authentication

Register: New users can create an account by providing their username, email, and password.

Login: Registered users can log in to their account using their email and password.

Protected Routes: Only authenticated users can access certain routes, ensuring secure data handling.

Blog Post Management

Create Blog Post: Authenticated users can create new blog posts, including a title, content, and optional images and videos.

Get All Blog Posts: Users can view a list of all blog posts available on the platform.

Get Blog Post by ID: Users can view detailed information about a specific blog post by its ID.

Update Blog Post: Authenticated users can update their own blog posts by modifying the title, content, images, and videos.

Delete Blog Post: Authenticated users can delete their own blog posts from the platform.

Getting Started

To get started with the InsightInk backend, follow these steps:

Clone the Repository:

git clone https://github.com/yourusername/insightink-backend.git

Install Dependencies:

Navigate to the project directory and install the necessary dependencies:

cd insightink-backend

npm install

Set Up Environment Variables:

Create a .env file in the root directory of the project and add your MongoDB URI and JWT secret:

makefile

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

Run the Server:

Start the server using the following command:

npm start

The server will start running on the specified port (default is 3000), and you can now start using the API endpoints to manage users and blog posts.

API Endpoints

User Routes

POST /api/users/register: Register a new user.

POST /api/users/login: Log in an existing user.

Blog Post Routes

GET /api/blogs/getblog: Get all blog posts.

POST /api/blogs/createblog: Create a new blog post (requires authentication).

GET /api/blogs/getbyid/:id: Get a specific blog post by ID.

PUT /api/blogs/updatebyid/:id: Update a blog post by ID (requires authentication).

DELETE /api/blogs/delete/:id: Delete a blog post by ID (requires authentication).

Contribution
We welcome contributions to improve InsightInk! If you have any suggestions, feel free to create an issue or submit a pull request.
