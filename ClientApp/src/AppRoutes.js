import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { DemoNavbar } from "./components/DemoNavbar";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
  {
      path: '/DemoNavbar',
       element: <DemoNavbar />
    }
];

export default AppRoutes;
