import LoginPage from "../components/pages/login/LoginPage";
import RegisterPage from "../components/pages/register/RegisterPage";
import HomeSalla from "../components/layouts/HomeSalla";
import Home from "../components/layouts/Home";
import ProdDetails from "../components/pages/Details/ProdDetails";
import CartPage from "../components/pages/cart/CartPage";
const routes = [
  {
    path: '/',
    element: <HomeSalla />,
    children: [
      { path: 'login',exact: true, element: <LoginPage/> },
      { path: 'register', exact: true, element: <RegisterPage /> },
      { path: 'home', exact: true, element: <Home /> },
      { path: "/product/:id", element: <ProdDetails /> },
      { path: "cart", element: <CartPage /> }
    ],
  },
];

export default routes;