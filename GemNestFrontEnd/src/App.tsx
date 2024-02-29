import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home.tsx";
import LoginForm from "./pages/login.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element : <HomePage />
        },
        {
            path:"/login",
            element:<LoginForm/>
        },
        {
            path:"/home",
            element : <HomePage />
        },




    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App