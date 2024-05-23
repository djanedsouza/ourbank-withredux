import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import NetBanking from "./screens/NetBanking";
import Contact from "./screens/Contact";
import Services from "./screens/Services";
import store from "./reduxContainer/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Gallery />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/netbanking" element={<NetBanking />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
