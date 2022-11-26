import { react } from "react";
import './App.scss';
import Header from "./components/header/Header.js"
import Footer from "./components/footer/Footer.js"
import Home from "./components/home/Home.js"
import MovieDetail from "./components/movieDetail/MovieDetail.js"
import PageNotFound from "./components/pageNotFound/PageNotFound.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
      <Routes>
        {/* exact keyword is not needed */}
        <Route  path="/" element={<Home />} />
        <Route path="/movie/:imdbId" element={<MovieDetail />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}

      </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
