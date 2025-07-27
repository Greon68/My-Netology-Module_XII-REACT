import {
  Route,
  Routes,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { postLoader, postsLoader } from "./loaders";
import { AddPost } from "./pages/AddPost";
import { Posts } from "./pages/Posts";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./hocs/ProtectedRoute";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<Posts />} loader={postsLoader} />
        <Route path="/posts/:id" element={<Post />} loader={postLoader} />
        <Route path="/new-post" element={<Navigate to="/add-post" />} />
        <Route
          path="/add-post"
          element={
            <ProtectedRoute>
              <AddPost />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={routes} />

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="/posts" element={<Posts />} />
    //     <Route path="/posts/:id" element={<Post />} />
    //     <Route path="/new-post" element={<Navigate to="/add" />} />
    //     <Route
    //       path="/add"
    //       element={
    //         <ProtectedRoute>
    //           <AddPost />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
