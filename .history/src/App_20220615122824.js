import "./App.css"
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <main className="App">
      <div className="App__container">
        <Nav />
        <Body />
      </div>
    </main>
  );
}

export default App;
