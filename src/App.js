import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>📔Dictionary</h1>
      <Dictionary defaultKeyword="sunset" />
      <footer>
        <a href="https://github.com/axteria/dictionary-app" rel="noreferrer">
          Open-sourced
        </a>{" "}
        by Faye W
      </footer>
    </div>
  );
}

export default App;
