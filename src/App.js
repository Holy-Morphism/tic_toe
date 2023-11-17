import "./App.css";

function Square(params) {
  return <button className="square">1</button>;
}
export default function Board() {
  return (
    <div className="App">
      <div>
        <Square />
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div>
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </div>
  );
}
