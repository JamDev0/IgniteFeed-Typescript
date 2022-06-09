import { useEffect, useState } from 'react';

import Styles from './Feed.module.css';

import { Post } from './Post';

type URL = string;


interface Comments {
    Id: number;
    Content: 
        {
            Id: number;
            UserName: string;
            ProfilePic: string;
            IsTheCurrentUser: boolean;
            PublishTime: number;
            Content: string;
            LikesAmount: number;
        }[]
}

interface Posts {
    Id: number;
    Content: {
        UserName: string;
        UserRole: string;
        ProfilePic: string;
        PublishTime: number;
        Content: [
            {
                Type: "Paragraph" | "Link";
                Content: string;
            }
        ];
        CommentId: number;
    }
    
}

export function Feed(){
    const [Comments, setComments] = useState<Comments[] | null>([]);
    const [Posts, setPosts] = useState<Posts[] | null>([]);

    async function GetComments(URL: URL) {
        return fetch(URL).then(response => response.json()).then(data => {return data});
    }

    async function GetPosts(URL: URL) {
        return fetch(URL).then(response => response.json()).then(data => {return data});
    }

    useEffect(()=>{
        GetComments('../Jsons/Comments.json').then(data => setComments(data));
        GetPosts('../Jsons/Posts.json').then(data => setPosts(data));
    }, [])


    function findTheRelatedCommentsArray (Content: Posts["Content"]) {
        const foundComments = Comments?.find(Comment => Comment.Id === Content.CommentId);

        if(!foundComments) return null;

        return foundComments.Content; 
    }

    return(
        <section className={Styles.Feed}>
            {
                Posts?.map(({ Id, Content }) => (
                    <Post
                     key={Id}
                     PublishTime={Content.PublishTime}
                     ProfilePic={Content.ProfilePic}
                     UserName={Content.UserName}
                     UserRole={Content.UserRole}
                     CommentsContent={findTheRelatedCommentsArray(Content)}
                     Content={Content.Content}
                    />
                ))
            }
        </section>
    )    
}