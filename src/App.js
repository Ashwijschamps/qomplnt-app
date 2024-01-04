import { lazy, Suspense } from "react";
import "./assest/css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Layout = lazy(() => import("./container/Layout"));
const DashBoard = lazy(() => import("./pages/dashboard/Dashboard"));
const DummyHome = lazy(() => import("./pages/dashboard/DummyHome"));
const DummyHomeSecond = lazy(() => import("./pages/dashboard/DummyHomeSecond"));
const PreLogin = lazy(() => import("./pages/authorization/PreLogin"));

const userAddress = localStorage.getItem("userAddress");
console.log("Is Valid User", JSON.parse(userAddress));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <DashBoard />
      </Suspense>
    ),
  },
  {
    path: "/dummy-home",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <DummyHome />
      </Suspense>
    ),
  },
  {
    path: "/dummy-home-second",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <DummyHomeSecond />
      </Suspense>
    ),
  },
  {
    path: "/:token",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <PreLogin />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Layout />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
