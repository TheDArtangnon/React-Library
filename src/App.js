import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([]);

function addToCart(book) {
  const dupeItem = cart.find(item => +item.id === +book.id)
  if (dupeItem) {
  dupeItem.quantity += 1
  }
  console.log(dupeItem)
  setCart([...cart, {...book, quantity: 1}])
}

useEffect(() => {
 // console.log('cart')
}, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes> 
      <Route path="/" element={< Home />} />
      <Route path="/books" element={<Books books={books} />}/>
      <Route path="/books/:id" element={<BookInfo books={books} 
      addToCart={addToCart} cart={cart}/>} />
      <Route path="/cart" element={<Cart books={books} cart={null}
      />}/>

   
      </Routes>
     
      <Footer />
    </div>
     </Router>

  );
}

export default App;
