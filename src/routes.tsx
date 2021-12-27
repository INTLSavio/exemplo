import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";


export function Routes(){
   return(
       <BrowserRouter>
        <Route component={Home} path="/" exact/>
        <Route component={Contato} path="/contato" />
       </BrowserRouter>
   )
}
