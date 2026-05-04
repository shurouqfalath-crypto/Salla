import LoginPage from "../components/pages/login/LoginPage";
import RegisterPage from "../components/pages/register/RegisterPage";
import HomeSalla from "../components/layouts/HomeSalla";
import Home from "../components/layouts/Home";
import ProdDetails from "../components/pages/Details/ProdDetails";
import CartPage from "../components/pages/cart/CartPage";
import Users from "../components/pages/users/Users";
import Products from "../components/pages/products/Products";
import ProductsPage from "../components/pages/products/ProductsPage";
import UserPage from "../components/pages/users/UserPage";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/dashboard/MainLayout";
const routes = [
  {
    path: "/",
    element: <HomeSalla />,
    children: [
      { path: "login", exact: true, element: <LoginPage /> },
      { path: "register", exact: true, element: <RegisterPage /> },
      { path: "home", exact: true, element: <Home /> },
      { path: "/product/:id", element: <ProdDetails /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
    { path: 'userspage', exact: true, element: <UserPage /> },
    { path: 'productspage', exact: true, element: <ProductsPage /> },
  ]
  },

// {
//   path: '/',
//   element: <MainLayout />,
 
// }
];

export default routes;
