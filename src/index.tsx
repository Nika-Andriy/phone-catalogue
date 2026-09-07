import './styles/fonts.scss';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './App.scss';
import { HashRouter } from 'react-router-dom'; // Замінили BrowserRouter на HashRouter
import { Header } from './modules/shared/components/Header';
import { Footer } from './modules/shared/components/Footer';
import { FavoritesProvider } from './modules/shared/context/FavoriteContext';
import { CartProvider } from './modules/shared/context/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <CartProvider>
    <FavoritesProvider>
      <HashRouter>
        <div className="mainContent">
          <Header />
          <App />
          <Footer />
        </div>
      </HashRouter>
    </FavoritesProvider>
  </CartProvider>,
);
