import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import Home, { loader as NewsLoader } from "./pages/Home";
import Create from "./layout/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: NewsLoader,
      },
      {
        path: "/create-blog",
        element: <Create />,
      },
    ],
  },
]);

function App() {
  return (
    <section className="bg-white text-charcoalBlack relative lg:text-xl">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
