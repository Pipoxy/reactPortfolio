import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Footer, Header, Work } from "./components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/reactPortfolio" element={<About />} />
          <Route path="/reactPortfolio/work" element={<Work />} />
          <Route path="/reactPortfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
