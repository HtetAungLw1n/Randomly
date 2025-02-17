import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import Home from "./pages/Home";
import NewsForm from "./components/NewsForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-blog",
        element: <NewsForm />,
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
