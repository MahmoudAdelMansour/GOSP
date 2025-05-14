import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import ScholarshipPage from "./pages/ScholarshipPage.jsx";
import Layout from "./pages/Layout.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
import SiteHome from "./pages/SiteHome.jsx";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
       <Routes>
           // Site Home
           <Route index element={<SiteHome/>} />
{/*
Note that index routes can't have children.
If you're expecting that behavior,
you probably want a layout route.
*/}
           <Route path="dashboard" element={<Layout/>}>
               <Route index element={<DashboardHome/>} />
               <Route  path="scholarship" element={<ScholarshipPage />} />
               <Route path="search/:city?" element={<App />} />  {/* This will render at /dashboard */}
           </Route>

       </Routes>
    </BrowserRouter>

)
/*
    Page Of Collection ( products , users , scholarships , etc.. )
    - 1. Navbar
    - 2. single page for collection ( product , user , scholarship , etc.. )
    - 3. When click on single ( product , user , scholarship , etc.. ) it will open a new page
  */

/*
TASK -> END OF ROUTER
 1- Build Main Search at your navbar
 2- make the search work with your elements (scholarships , products , etc.. )
 3- Use SearchParams to get the data from the search
 4- Based On Attributes like [ Size,Location,Color , etc.. ] using Parameters
 -
 Task 2 -> Redirect After Login
    1- Create a login page
    2- Create a register page
    3- Create a Profile Page
   -> when the user finishes the login or register redirect him to the profile page

* */