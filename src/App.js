import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
import './assets/style/global.scss';
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
