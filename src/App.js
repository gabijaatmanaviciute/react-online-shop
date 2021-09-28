import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
// import Checkout from "./components/Checkout/Checkout";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  // const [orderInfo, setOrderInfo] = useState({});
  // const [orderError, setOrderError] = useState("");

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

  const RemoveItemFromCart = async (itemId) => {
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

  // const refreshCart = async () => {
  //   const newCartData = await commerce.cart.refresh();
  //   setCartData(newCartData);
  // };

  // const handleCheckout = async (checkoutId, orderData) => {
  //   try {
  //     // const incomingOrder = await commerce.checkout.capture(
  //     //   checkoutId,
  //     //   orderData
  //     // );

  //     setOrderInfo(orderData);

  //     refreshCart();
  //   } catch (error) {
  //     setOrderError(
  //       (error.data && error.data.error && error.data.error.message) ||
  //         "An error has occurred"
  //     );
  //   }
  // };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);

  console.log(products);

  return (
    <Router>
      <Header
        cartItems={cartData.total_items}
        totalCost={
          (cartData.subtotal && cartData.subtotal.formatted_with_symbol) ||
          "00.00"
        }
      />
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
            RemoveItemFromCart={RemoveItemFromCart}
          />
        </Route>
        {/* <Route exact path="/checkout">
          <Checkout
            orderInfo={orderInfo}
            orderError={orderError}
            cartData={cartData}
            handleCheckout={handleCheckout}
          />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
