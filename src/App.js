import {Routes, Route} from 'react-router-dom'
import Mockman from 'mockman-js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
