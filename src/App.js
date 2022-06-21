import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Search from "./components/Search";
import styled from "styled-components"
import {Link} from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Towseen</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
