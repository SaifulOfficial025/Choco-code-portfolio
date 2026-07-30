import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router';
import { CursorGradient } from './components/ui/cursor-gradient';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorGradient />
    <RouterProvider router={router} />
  </StrictMode>,
)
