import './App.css';
import Header from './shared/components/Header/Header';
import Main from './shared/components/Main/Main';
import Footer from './shared/components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';
import { FavContextProvider } from './context/FavContext';

function App() {
  return (
    <main>
      <FavContextProvider>
      <CartContextProvider>
          <Header />
          <Main saludo="Bienvenidos" />
          <Footer />
       </CartContextProvider>
       </FavContextProvider>
    </main>
  );
}

export default App;
