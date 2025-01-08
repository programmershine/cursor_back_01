import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import PortfolioPage from './pages/PortfolioPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';

// Board Components
import BoardWrite from './components/board/BoardWrite';
import BoardDetail from './components/board/BoardDetail';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyles />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/write" element={<BoardWrite />} />
            <Route path="/community/:id" element={<BoardDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App; 