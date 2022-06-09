import Styles from './PostHeader.module.css'

import { ProfileImage } from './ProfileImage';

interface PostHeaderProps {
    ProfilePic: string;
    UserName: string;
    UserRole: string;
}

export function PostHeader({ ProfilePic, UserName, UserRole }: PostHeaderProps){
    return(
        <header className={Styles.Header}>
            <ProfileImage Image={ProfilePic}/>
            <h2>{UserName}</h2>
            <span>{UserRole}</span>
        </header>
    )
}