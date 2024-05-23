import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserProvider from "./Context/UserContext";
import DashboardPage from "./Pages/DashboardPage";
import MyNavbar from "./components/Navbar";
import BookProvider from "./Context/BookContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={
                <BookProvider>
                  <DashboardPage />
                </BookProvider>
              }
            ></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
