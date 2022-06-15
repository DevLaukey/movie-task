import "./App.css"
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Nav />
        <Body />
      </div>
    </div>
  );
}

export default App;
