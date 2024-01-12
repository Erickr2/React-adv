import { LazyExoticComponent, lazy } from "react";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages"; */

type JSXComponent = () => JSX.Element; // JSXComponent es de tipo "() => JSX.Element" componenete

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; //Component es de tipo Lazy... que retorna un componente "<JSXComponent>" o de tipo JSXComponent que es un componenete de react
    name: string;
}

//lazy son pedazos de mi app, es decir, componentes que se van a cargar solo cunado sean consumidos, para no construir todo el proyecto si no se va acceder a el
const Lazy1 = lazy( () => import(/* webpackChunkName: "Lazy1" */  '../01-lazyLoad/pages/LazyPage1'));
const Lazy2 = lazy( () => import(/* webpackChunkName: "Lazy2" */  '../01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy( () => import(/* webpackChunkName: "Lazy3" */  '../01-lazyLoad/pages/LazyPage3'));

// 'Route[]' =>  es un arreglo de la interface route 
export const routes: Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name: 'lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'lazy-3'
    }

]
