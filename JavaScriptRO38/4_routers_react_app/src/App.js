import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/home";
import FourHundredFourPage from "./pages/404";
import ContactPage from "./pages/contact";
import mockData from "./mockData";

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
              // Can be an API request to get contact list
              return {
                // Mock data
                contacts: mockData,
              };
            },
          },
          {
            path: ":contactId",
            element: <ContactPage />,
            loader: ({ params }) => {
              console.log("params", params);
              console.log("contactId", params.contactId);
              const contact = mockData.find(
                (contact) => contact.id === Number(params.contactId)
              );
              return {
                contacts: mockData,
                contact,
              };
            },
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
