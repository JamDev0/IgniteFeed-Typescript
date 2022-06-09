import { Header } from "./modules/Header";
import { SideBar } from "./modules/SideBar";
import { Feed } from "./modules/Feed";

import Styles from './App.module.css';

export function App(){
    return(
        <>
            <Header/>
            <section className={Styles.Body}>
                <SideBar/>
                <Feed/>
            </section>
        </>
    )
}