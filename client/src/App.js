import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([{ path: "/", element: <ProductPage /> }]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
