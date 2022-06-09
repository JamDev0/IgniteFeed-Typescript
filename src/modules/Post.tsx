import Styles from './Post.module.css';

import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostMain } from "./PostMain";

interface Props {
    UserName: string;
    UserRole: string;
    ProfilePic: string;
    PublishTime: number;
    Content: {
        Type: "Paragraph" | "Link";
        Content: string;
    }[];
    CommentsContent: {
        Id: number;
        UserName: string;
        ProfilePic: string;
        IsTheCurrentUser: boolean;
        PublishTime: number;
        Content: string;
        LikesAmount: number;
    }[] | null;
}

export function Post({ ProfilePic, UserName, UserRole, PublishTime, Content, CommentsContent }:Props){
    return(
        <section className={Styles.Post}>

            <time
             title='Públicado em 31 de maio de 2050' 
             dateTime='2050-05-31 00:00:00' 
             className={Styles.PublishTime}
            >
                Públicado há {PublishTime}h
            </time>

            <PostHeader
             ProfilePic={ProfilePic}
             UserName={UserName}
             UserRole={UserRole}
            />

            <PostMain
             Content={Content}
            />
            
            <PostFooter
             CommentsContent={CommentsContent}
            />
            
        </section>
    )
}