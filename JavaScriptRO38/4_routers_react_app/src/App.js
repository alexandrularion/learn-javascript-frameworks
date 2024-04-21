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
              // Can be an API request to get contact list
              // Mock data
              const data = [
                {
                  id: 1,
                  firstName: "John",
                  lastName: "Doe",
                  email: "john.doe@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                  phoneNumber: "123-456-7890",
                },
                {
                  id: 2,
                  firstName: "Jane",
                  lastName: "Smith",
                  email: "jane.smith@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                  phoneNumber: "234-567-8901",
                },
                {
                  id: 3,
                  firstName: "Michael",
                  lastName: "Johnson",
                  email: "michael.johnson@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                  phoneNumber: "345-678-9012",
                },
                {
                  id: 4,
                  firstName: "Emily",
                  lastName: "Brown",
                  email: "emily.brown@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/4.jpg",
                  phoneNumber: "456-789-0123",
                },
                {
                  id: 5,
                  firstName: "David",
                  lastName: "Wilson",
                  email: "david.wilson@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                  phoneNumber: "567-890-1234",
                },
                {
                  id: 6,
                  firstName: "Emma",
                  lastName: "Martinez",
                  email: "emma.martinez@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/6.jpg",
                  phoneNumber: "678-901-2345",
                },
                {
                  id: 7,
                  firstName: "Christopher",
                  lastName: "Taylor",
                  email: "christopher.taylor@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/7.jpg",
                  phoneNumber: "789-012-3456",
                },
                {
                  id: 8,
                  firstName: "Olivia",
                  lastName: "Anderson",
                  email: "olivia.anderson@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/8.jpg",
                  phoneNumber: "890-123-4567",
                },
                {
                  id: 9,
                  firstName: "James",
                  lastName: "Thomas",
                  email: "james.thomas@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/9.jpg",
                  phoneNumber: "901-234-5678",
                },
                {
                  id: 10,
                  firstName: "Sophia",
                  lastName: "White",
                  email: "sophia.white@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/10.jpg",
                  phoneNumber: "012-345-6789",
                },
                {
                  id: 11,
                  firstName: "Jane",
                  lastName: "Smith",
                  email: "jane.smith@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                  phoneNumber: "234-567-8901",
                },
                {
                  id: 12,
                  firstName: "Michael",
                  lastName: "Johnson",
                  email: "michael.johnson@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                  phoneNumber: "345-678-9012",
                },
                {
                  id: 13,
                  firstName: "Christopher",
                  lastName: "Taylor",
                  email: "christopher.taylor@example.com",
                  avatar: "https://randomuser.me/api/portraits/men/7.jpg",
                  phoneNumber: "789-012-3456",
                },
                {
                  id: 14,
                  firstName: "Olivia",
                  lastName: "Anderson",
                  email: "olivia.anderson@example.com",
                  avatar: "https://randomuser.me/api/portraits/women/8.jpg",
                  phoneNumber: "890-123-4567",
                },
              ];
              return {
                contacts: data,
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
