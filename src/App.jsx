import Home from './pages/home/Home';
import Game from './pages/game/Game';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    { path: '*', element: <Home /> },
    { path: '/game', element: <Game /> },
]);


function App() {
    return <RouterProvider router={router} />;
}
  
export default App