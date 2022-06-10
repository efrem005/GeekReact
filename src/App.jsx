import './App.scss'
import Message from "./components/Message"

function App() {
    const msg = "Hello World"

  return (
    <div className="App">
      <Message message={msg} />
    </div>
  );
}

export default App;
