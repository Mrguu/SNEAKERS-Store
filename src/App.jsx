import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Store from "./pages/Store.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadpage();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <main>
      <Home />
      <Store />
      <About />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
