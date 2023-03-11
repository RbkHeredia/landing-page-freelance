import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './page/landing-page';
import Areas from './page/registro-Free-Components/areas';
import Completed from './page/registro-Free-Components/completed';
import Idioms from './page/registro-Free-Components/idioms';
import Skills from './page/registro-Free-Components/skills';
import RegistroFreelancers from './page/registro-freelancers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/register",
    element: <RegistroFreelancers/>,
    children: [
      {
        path: "/register/areas",
        element: <Areas />,
      },
      {
        path: "/register/skills",
        element: <Skills />,
      },
      {
        path: "/register/idioms",
        element: <Idioms />,
      },
      {
        path: "/register/completed",
        element: <Completed />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <LandingPage/>
    </div>
  );
}

export default App;
