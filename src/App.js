import { Route, Routes } from "react-router-dom";

// Pages
import { Home, Contact, Categories, ProductList } from "./pages";

//  Components
import { Header, Footer } from "./components";

function App() {
  return (
    <>
    {/* <Annocements /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
