import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PagesToRead from "../Pages/PagesToRead";
import Listed from "../Pages/Listed";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import BookDetails from "../Books/BookDetails";
import ReadBook from "../Books/ReadBook";
import WishList from "../Books/WishList";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
    {
            path:'/',
            element:<Home></Home>
    },
    {
        path:'/books/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../books.json')
    },
    {
        path:'/listedBooks',
        element:<Listed></Listed>,
        children:[
         {
            path:'',
            element:<ReadBook></ReadBook>,
            loader:()=> fetch('../books.json')

        },
        {
            path:'wishList',
            element:<WishList></WishList>,
            loader:()=>fetch('../books.json')
        }
    ]
    },
    {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch('../books.json')
    },
    {
        path:'/about',
        element:<About></About>
    },
    {
        path:'/contact',
        element:<Contact></Contact>
    }
    
    
    ]
    }
])