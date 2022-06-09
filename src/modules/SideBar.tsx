import Styles from './SideBar.module.css'

import { PencilSimpleLine } from 'phosphor-react';

import { ProfileImage } from './ProfileImage';


export function SideBar(){
    return(
        <div className={Styles.SideBar}>
            <div className={Styles.ImgDiv}>

            </div>
            <div className={Styles.ContentDiv}>
                <ProfileImage 
                 Image='https://avatars.githubusercontent.com/u/61752887?v=4'
                 style={
                    {
                        position: 'relative',
                        transform: 'translateY(-50%)',
                    }
                 } 
                />
                <h2>Juan Garcia</h2>
                <span>Ui Designer</span>
                <footer>
                    <a href='#'>
                        <PencilSimpleLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </div>
    )
}