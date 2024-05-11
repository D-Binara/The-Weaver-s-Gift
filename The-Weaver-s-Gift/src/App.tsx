import "./App.css";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/nav_bar";

function App() {
  return (
    <div>
       <Navbar></Navbar>
      <h1 className="">Counter</h1>
      <p>Count: </p>

      <ListGroup>

      </ListGroup>
    </div>

    
  );
}
export default App;
