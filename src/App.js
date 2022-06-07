import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Hi There</h1>
      <BrowserRouter>
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
