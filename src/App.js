import { Route, Routes } from "react-router-dom";

// Pages
import { Home, Contact, Categories, ProductList, Product, Register, Login, Cart } from "./pages";

//  Components
import { Header, Footer } from "./components";

function App() {
  // const user = true
  return (
    <>
    {/* <Annocements /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
