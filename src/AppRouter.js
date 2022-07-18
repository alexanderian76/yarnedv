import React, { useContext, useEffect } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import { routes } from "./routes";
import Main from "./pages/Main";

function AppRouter() {
  
  return (
    <Routes>
        {routes.map(({route, Element}) => {
            return <Route key={route} path={route} element={<Element height={window.innerHeight}/>}/>
        })}
        <Route path="*" element={<Main height={window.innerHeight}/>}/>
    </Routes>
  );
}

export default AppRouter;
