import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; 
import { CursorGradient } from './components/ui/cursor-gradient';

function App() {
  return  (  
    <>
      <CursorGradient />
      <RouterProvider router={router} />
    </>
  );
}

export default App
