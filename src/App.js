import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";



function App() {
  return (
    <>
      <Header />
      <main className="main">
        <About />

      </main>
      <Footer />
    </>
  );
}

export default App;
