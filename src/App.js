import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Dictionary </h1>
        <header className="App-header">
          <main>
            <Dictionary defaultKey="aspire" />
          </main>
        </header>
      </div>
      <footer className="text-center">
        <a href="https://github.com/Killiana/dictionary-project">
          Open-source code
        </a>{" "}
        by Iliyana Boneva
      </footer>
    </div>
  );
}
