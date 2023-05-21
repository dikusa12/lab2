import NavBar from "./components/Nav/index.js";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/index.js";
import { Suspense } from "react";

function App() {
    return (
      <Suspense fallback="loading">
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
      </Suspense>
    )
}

export default App
