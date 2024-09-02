import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignUp from "./AuthComponents/SignUp";

function App() {
  return <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<SignUp/>}/>
      </Routes>
    </Router>
  </div>
}

export default App
