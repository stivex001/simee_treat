import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import {
  Home,
  Contact,
  Categories,
  ProductList,
  Product,
  Register,
  Login,
  Cart,
  Success,
  Admin,
} from "./pages";

//  Components
import { Header, Footer } from "./components";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
    <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Annocements /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/login" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
