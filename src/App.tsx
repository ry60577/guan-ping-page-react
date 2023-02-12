import React, { lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import "./App.scss";
import "./assets/styles/_variable.scss";
import Loading from "pages/Loading";

const Layout = lazy(() => import("./layout"));
const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const Project = lazy(() => import("./pages/Project"));

const App = () => {
  const routerConfig: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/resume",
          element: (
            <Suspense fallback={<Loading />}>
              <Resume />
            </Suspense>
          ),
        },
        {
          path: "/project",
          element: (
            <Suspense fallback={<Loading />}>
              <Project />
            </Suspense>
          ),
        },
      ],
    },
  ];
  const elemets = useRoutes(routerConfig);
  return <div className="App">{elemets}</div>;
};

export default App;
