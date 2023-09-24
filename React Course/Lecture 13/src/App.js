import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import { Outlet } from "react-router-dom";
import CountryDetails from "./component/CountryDetails";
import ShimmerDetails from "./component/ShimmerDetails.js";
import UserContext from "./utils/UserContext";

const BookFlight = lazy(() => import("./component/BookFlight"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rahil Ahmed",
    email: "rahilahmed@gmail.com",
  });

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/:capital",
        element: <CountryDetails />,
      },
      {
        path: "/bookFlight",
        element: (
          <Suspense fallback={<ShimmerDetails />}>
            <BookFlight />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
