import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/accordian"}>
        <p>Go to accordian</p>
      </Link>
    </>
  );
}

export default App;
