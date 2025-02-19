import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import Home, { loader as newsLoader } from "./pages/Home";
import Create, { action as createNewsAction } from "./pages/Create";
import Editor, { action as editorAction } from "./pages/Editor";
import Detail, { loader as newsDetailLoader } from "./pages/Detail";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: newsLoader,
      },
      {
        path: "/create-blog",
        element: <Create />,
        action: createNewsAction,
      },
      {
        path: "/editor",
        element: <Editor />,
        action: editorAction,
      },
      {
        path: "/news-detail/:id",
        element: <Detail />,
        loader: newsDetailLoader,
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
