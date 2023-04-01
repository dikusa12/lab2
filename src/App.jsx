import NavBar from "./components/Nav/index.js";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/index.js";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
