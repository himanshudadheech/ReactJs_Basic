import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";

function App() {
  return (
    <>
      {/* nav bar from bootstrap */}
      {/* components mai se nav bar import krne k liye */}

      <Navbar title="Blog Website" />
      {/* Nav  bar from bootstrap */}

       {/* Bootstrap se form laye */}
      <div className="container md-3">
        {/* Bootstrap se form laye */}
        <Textform test="Enter your tex below to Analyze" />

      </div>
    </>
  );
}

export default App;
