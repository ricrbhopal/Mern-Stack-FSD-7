import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My first react app</div>

      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        nostrum provident error dolorem laborum illum perspiciatis dignissimos
        cupiditate, nisi quod expedita, modi molestias. Reiciendis voluptatibus
        quod beatae animi odio ut.
      </p>

      <button>click Here</button>

      <Footer />
    </>
  );
}

export default App;
