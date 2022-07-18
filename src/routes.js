import { ABOUT_ROUTE, DEVELOP_ROUTE } from "./utils/consts"

import About from "./pages/About";
import Develop from './pages/Develop'


export const routes = [
    
    {
        route: ABOUT_ROUTE,
        Element: About
    },
    {
        route: DEVELOP_ROUTE,
        Element: Develop
    }

]