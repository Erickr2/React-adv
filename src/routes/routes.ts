import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages"; */

type JSXComponent = () => JSX.Element; // JSXComponent es de tipo "() => JSX.Element" componenete

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; //Component es de tipo Lazy... que retorna un componente "<JSXComponent>" o de tipo JSXComponent que es un componenete de react
    name: string;
}

//lazy son pedazos de mi app, es decir, componentes que se van a cargar solo cunado sean consumidos, para no construir todo el proyecto si no se va acceder a el
// const Lazy2 = lazy( () => import(/* webpackChunkName: "Lazy2" */  '../01-lazyLoad/pages/LazyPage2'));
//const Lazy3 = lazy( () => import(/* webpackChunkName: "Lazy3" */  '../01-lazyLoad/pages/LazyPage3'));


const LazyLayout = lazy( () => import(/* webpackChunkName: "Lazy" */  '../01-lazyLoad/layout/LazyLayout'));


// 'Route[]' =>  es un arreglo de la interface route 
export const routes: Route[] = [
    {
        path:'/lazyload/*', // /lazyload/* la ruta lazy-layout va a tener mas rutas y se van a manejar despues del path /lazyload/*
        to:'/lazyload/',  
        Component: LazyLayout,
        name: 'lazyload'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'no-lazy'
    }

]
