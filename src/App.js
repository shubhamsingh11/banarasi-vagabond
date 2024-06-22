import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header/Header.tsx";
import Homepage from "./pages/Homepage/Homepage.tsx";

function App() {
  return (
    <>   
    <Router>          
    <Header/>
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/upload" element={<>Upload Blog</>} />
      <Route path='/about-me' element={<>About Me</>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
