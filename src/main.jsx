import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Home/Home';
import Service from './Services/Service';
import Country from './Countries/Country';
import Process from './Process/Process';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import ServiceDetails from './Services/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/service", element: <Service></Service> },
      { path: "/service/:id", element: <ServiceDetails></ServiceDetails> },
      { path: "/country", element: <Country></Country> },
      { path: "/process", element: <Process></Process> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
