import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchCartData = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart);
  };

  const removeItemFromCart = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCartData(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCartData(response.cart);
  };

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCartData(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);

  console.log(cartData);

  return (
    <Router>
      <Header cartItems={cartData.total_items} />
      <Switch>
        <Route exact path="/">
          <main>
            <Products products={products} addProduct={addProduct} />
          </main>
        </Route>
        <Route exact path="/cart">
          <Cart
            cartData={cartData}
            updateProduct={updateProduct}
            handleEmptyCart={handleEmptyCart}
            removeItemFromCart={removeItemFromCart}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
