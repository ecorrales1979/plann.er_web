import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CreateTrip } from "./pages/create-trip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
