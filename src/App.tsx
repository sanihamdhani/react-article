import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Footer from "./components/Footer";

import Header from "./components/Header";
import TopHeadlines from "./components/top-headlines/TopHeadlines";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TopHeadlines />}></Route>
        <Route path="/apple" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
