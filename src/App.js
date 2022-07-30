import './App.css';
import Header from './shared/components/Header/Header';
import Main from './shared/components/Main/Main';
import Footer from './shared/components/Footer/Footer';

function App() {
  return (
    <main>
          <Header />
          <Main saludo="Bienvenidos" />
          <Footer />
    </main>
  );
}

export default App;
