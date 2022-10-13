import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import styled from 'styled-components'

const Wrapper = styled.section`
background-color: black;
color: white;
font-size: 1.1em;
text-align: center;
margin-top: -2%;
padding-top: 2%;
`;


function Navigation() {
  return (
    <div> <Wrapper>
      <nav>
        <ul>
          <li>
            <NavLink style={{color:"white"}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={{color:"white"}} to="/stats">Stats</NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
    </div>
  );
}

function App() {

  return (
    <>
      <Wrapper>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<p>No match</p>} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
