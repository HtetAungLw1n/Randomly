import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import Home, { loader as newsLoader } from "./pages/Home";
import Create from "./pages/Create";
import Editor, { action as editorAction } from "./pages/Editor";
import Detail, {
  action as newsDeleteAction,
  loader as newsDetailLoader,
} from "./pages/Detail";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
import {
  action as newsEditAction,
  action as newsCreateAction,
} from "./components/NewsForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: newsLoader,
      },
      {
        path: "/create-blog",
        element: <Create />,
        action: newsCreateAction,
      },
      {
        path: "/editor",
        element: <Editor />,
        action: editorAction,
      },
      {
        path: ":id",
        id: "news-detail",
        loader: newsDetailLoader,
        children: [
          {
            index: true,
            element: <Detail />,
            action: newsDeleteAction,
          },
          { path: "edit-news", element: <Edit />, action: newsEditAction },
        ],
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
