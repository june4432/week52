import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./routes/Home";
import Calendar from './routes/Calendar';
import Todo from './routes/Todo';


function App() {
  return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/todo" element={<Todo/>} />
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;
