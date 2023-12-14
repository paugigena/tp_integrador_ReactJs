import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar.jsx";
import Public from "./Routes/Public.jsx";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
        <Public />
        </Container>

      </Router>
    </>
  );
}

export default App;
