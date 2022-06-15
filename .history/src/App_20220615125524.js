import "./App.css"
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main className="App">
      <div className="App__container">
        <Sidebar />
        <Body />
      </div>
    </main>
  );
}

export default App;
