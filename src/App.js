import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Dictionary </h1>
        <header className="App-header">
          <main>
            <Dictionary />
          </main>
        </header>
      </div>
      <footer className="text-center">Coded by Claire Blackwood</footer>
    </div>
  );
}
