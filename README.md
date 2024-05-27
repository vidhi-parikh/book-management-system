# Book Management System

Welcome to the Book Management System! This is a full-stack CRUD (Create, Read, Update, Delete) application that allows users to manage books. Users can register, log in, create new books, update existing books, delete books, and view a list of all books.


## Features

- User Registration
- User Login
- View List of All Books
- Create a New Book
- Update Book Details
- Delete a Book

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** TailwindCSS

## Screenshots

![Register](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/4aafd835-2d47-45d5-97da-30070d38236f)
![Login](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/11d02b34-3335-470e-95e2-c992e0bc5428)
![View-Books](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/7fdbeb56-d786-4e57-9024-dddb277f8825)
![Add-Books](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/31fa31a0-c0e0-475c-9a8d-a362dc9ca481)
![Edit-Books](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/2e770374-5c5b-47c7-8760-7e2b65474624)
![Delete-Books](https://github.com/vidhi-parikh/book-management-system-frontend/assets/58839364/9c089fd5-ea33-42b7-9fca-81fedae09f02)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or a cloud-based service like MongoDB Atlas)

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/vidhi-parikh/book-management-system.git
    cd book-management-system
    ```

2. Navigate to the backend directory:
    ```sh
    cd backend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the backend directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or the URL where your frontend server is running).

2. Register a new user account.

3. Log in with your credentials.

4. Use the interface to create, update, delete, and view books.

## API Endpoints

### User Authentication

- `POST /api/user/sign-up` - Register a new user
- `POST /api/user/login` - User login

### Book Management

- `GET /api/books/showAllBooks` - Get all books
- `POST /api/books/addBook` - Create a new book
- `PUT /api/books//updateBook/:id` - Update a book
- `DELETE /api/books/deleteBook/:id` - Delete a book

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Contact

For any questions or feedback, please contact me at [parikhvidhi10@gmail.com].

---

Thank you for checking out my project!
