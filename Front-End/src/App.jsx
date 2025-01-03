import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import router from './routes/route';



function App() {
  return <RouterProvider router={router} />;
}

export default App;
