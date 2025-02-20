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
import { loader as logoutLoader } from "./pages/Logout";
import { checkTokenLoader, tokenLoader } from "./ulti/auth";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Main />,
    // errorElement: <Error />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: newsLoader,
      },
      {
        path: "/create-news",
        element: <Create />,
        action: newsCreateAction,
        loader: checkTokenLoader,
      },
      {
        path: "/editor",
        element: <Editor />,
        action: editorAction,
      },
      { path: "/logout", loader: logoutLoader },
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
          {
            path: "edit-news",
            element: <Edit />,
            action: newsEditAction,
            loader: checkTokenLoader,
          },
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
