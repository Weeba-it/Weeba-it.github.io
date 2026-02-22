import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gay from "./pages/Gay";
import Sofia from "./pages/Sofia";
import SofiaLove from "./pages/SofiaLove";


const RouterWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages SPA routing
    const handleGitHubPagesRouting = () => {
      const path = window.location.pathname;
      const search = window.location.search;

      // If there's a query parameter starting with /, it's a redirected route
      if (search.startsWith('?/')) {
        const redirectedPath = '/' + search.slice(2).split('&')[0].replace(/~and~/g, '&');
        navigate(redirectedPath + window.location.hash, { replace: true });
      }
    };

    handleGitHubPagesRouting();
  }, [navigate]);

  useEffect(() => {
    if (!location) return;
    const hash = location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    // Try immediate scroll, otherwise retry shortly to allow DOM to mount
    if (!scrollToElement()) {
      const t = setTimeout(() => {
        scrollToElement();
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/frocio" element={<Gay />} />
      <Route path="/gay" element={<Gay />} />
      <Route path="/sofia" element={<Sofia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <RouterWrapper />
  </BrowserRouter>
);

export default App;
