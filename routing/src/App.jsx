import { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import SinglePost from "./pages/SinglePost.page";

// main package
// react-router-dom
// Single Page App

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Routes>

      {/* {currentPage === "Home" ? <HomePage /> : <AboutPage />} */}
    </div>
  );
}

class App2 extends Component {
  state = {
    count: 0,
    multipleStates: [],
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  addState() {
    this.setState({
      multipleStates: [...this.state.multipleStates, "hello"],
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/posts/:postId" element={<SinglePost />} /> */}
        </Routes>

        {/* {currentPage === "Home" ? <HomePage /> : <AboutPage />} */}
      </div>
    );
  }
}

function useCountAndMultipleStates() {
  const [count, setCount] = useState(0);
  const [multipleStates, setMultipleStates] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  function addState() {
    setMultipleStates([...multipleStates, "hello"]);
  }

  return {
    count,
    multipleStates,
    increment,
    addState,
  };
}

function App3() {
  const { count, multipleStates, increment, addState } =
    useCountAndMultipleStates();

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/posts/:postId" element={<SinglePost />} /> */}
      </Routes>

      {/* {currentPage === "Home" ? <HomePage /> : <AboutPage />} */}
    </div>
  );
}

export default App;
