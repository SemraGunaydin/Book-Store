import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Products from "./pages/Products";
import Layout from "./componenets/Layout";

const router = createBrowserRouter ([
  {
    path :"/",
    element: <Layout/>,
    children:
    [
      {
        path: "/",
        element:<Home />,
      },
      {
        path:"/product",
        element:<Products/>,
      },
      {
        path:"/detail/:id",
        element:<Detail/>,
      },
      {
        path:"/category",
        element:<Category/>,
        children : [
          {path:"story" ,element : <Story/>},
          {path:"novel" ,element : <Novel/>},
        ],
      },
    ],

  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
