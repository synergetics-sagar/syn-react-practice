import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterImplementation from "./react-router/RouterImplementation";
import { lazy, Suspense } from "react";

// import Home from "./react-router/Home"
// import About from "./react-router/About"
// import Contact from "./react-router/Contact"

const Home = lazy(()=> import("./react-router/Home"))
const About = lazy(()=> import("./react-router/About"))
const Contact = lazy(()=> import("./react-router/Contact"))
const DataTable = lazy(()=> import("./react-router/data-table/DataTable"))
const UserProfile = lazy(()=> import("./react-router/data-table/UserProfile"))
function App() {

  const browserRouter = createBrowserRouter([
    {
      path:"/",
      element: <RouterImplementation />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<div>Loading Home</div>}>
                    <Home />
                  </Suspense> 
        },
        {
          path: "/about",
          element: <Suspense fallback={<div>Loading About</div>}>
                    <About />
                  </Suspense> 
        },
        {
          path: "/contact",
          element: <Suspense fallback={<div>Loading Contact</div>}>
                      <Contact />
                    </Suspense> 
        },
        {
          path: "data-table",
          element: <Suspense fallback={<div>Loading DataTable</div>}>
                      <DataTable />
                    </Suspense>
        },
        {
          path: "/profile/:uid",
          element: <Suspense fallback={<div>Loading UserProfile</div>}>
                      <UserProfile />
                    </Suspense>
        }
      ]
    }
  ])

  return (
    <div >
      
      <h1>Router</h1>
      <RouterProvider router={browserRouter}>
        <RouterImplementation />
      </RouterProvider>
    </div>
  );
}

export default App;
