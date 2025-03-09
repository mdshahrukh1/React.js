// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";//Navigate, Link 
import Categories from "./Pages/Categories";
import Product from "./Pages/Product";

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/categories">Categories</Link> | <Link to="/products">Products</Link>
//       </nav>
//       <Routes>
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/product" element={<Product />} />
//       </Routes>
//     </Router>

//   );
// }
const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <Router>
      <nav>
        <a href="/categories">Categories</a> | <a href="/products">Products</a>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
      <Routes>
        {/* Routes go here */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

/* <Route path="/categories" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Categories /></ProtectedRoute>} />
<Route path="/products" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Products /></ProtectedRoute>} /> */


export default App;


// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   const handleLogout = () => {
//       localStorage.removeItem("token");
//       window.location.href = "/login"; // Redirect to login
//   };

//   return (
//       <Router>
//           <nav>
//               <a href="/categories">Categories</a> | <a href="/products">Products</a>
//               {isAuthenticated ? (
//                   <button onClick={handleLogout}>Logout</button>
//               ) : (
//                   <a href="/login">Login</a>
//               )}
//           </nav>
//           <Routes>
//               {/* Routes go here */}
//           </Routes>
//       </Router>
//   );
// };

