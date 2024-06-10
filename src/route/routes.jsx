import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookShelfPage from "../pages/BookShelfPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/bookshelf",
        element: <BookShelfPage />,
    },
]);



