import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav.jsx'
import Ab from './about/ab.jsx'
import Foot from './footer/foot.jsx'
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  <>
    <Nav />

    <Ab />

    <Foot />
    </>
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
