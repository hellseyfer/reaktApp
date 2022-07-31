import './App.css';
import Header from './shared/components/Header/Header';
import Main from './shared/components/Main/Main';
import Footer from './shared/components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <main>
      <CartContextProvider>
          <Header />
          <Main saludo="Bienvenidos" />
          <Footer />
       </CartContextProvider>
    </main>
  );
}

export default App;
