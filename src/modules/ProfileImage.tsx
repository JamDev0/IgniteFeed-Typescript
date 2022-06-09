import Styles from './ProfileImage.module.css';

interface ProfileImageProps {
    Image: string;
    style?: {};
}

export function ProfileImage({ Image, style }:ProfileImageProps){
    return(
        <div style={style} className={Styles.UserAvatar}>
            <img src={Image}></img>
        </div>
    )
}