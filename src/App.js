import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './app/Router';
import CartProvider from './context/CartProvider';
import "./firebase/firebase";




function App() {
  return (
    <div>
      <CartProvider value='producto'>
        <Router/>
      </CartProvider>
    </div>
    )
}

export default App;
