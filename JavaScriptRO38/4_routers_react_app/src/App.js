import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/home";
import FourHundredFourPage from "./pages/404";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <FourHundredFourPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/contacts",
        children: [
          {
            path: "",
            element: <ContactsPage />,
            loader: () => {
              return {
                contacts: [{}],
              };
            },
          },
          {
            path: ":contactId",
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
