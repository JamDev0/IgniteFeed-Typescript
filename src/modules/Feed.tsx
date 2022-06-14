import { useEffect, useState } from 'react';

import Styles from './Feed.module.css';

import { Post } from './Post';


const posts = [
    {
        Id: 1,
        Content: {
            UserName: "Higor Penumbra",
            UserRole: "Dev Front-End",
            ProfilePic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50",
            PublishTime: 1,
            Content: [
                {
                    Type: "Paragraph",
                    Content: "Fala galeraa 👋"
                },

                {
                    Type: "Paragraph",
                    Content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
                },

                {
                    Type: "Link",
                    Content: "👉 higor.design/doctorcare"
                }
            ],

            CommentId: 1
        }
    },

    {
        Id: 2,
        Content: {
            UserName: "Leonard Maverik",
            UserRole: "Dev Back-End",
            ProfilePic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=60",
            PublishTime: 2,
            Content: [
                {
                    Type: "Paragraph",
                    Content: "Fala galeraa 👋"
                },

                {
                    Type: "Paragraph",
                    Content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
                },

                {
                    Type: "Link",
                    Content: "👉 higor.design/doctorcare"
                }
            ],

            CommentId: 2
        }
    }
]

const comments = [
    {
        "Id": 1,
        "Content": [
            {
                "Id": 1,
                "UserName": "João Monteiro",
                "ProfilePic": "https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                "IsTheCurrentUser": false,
                "PublishTime": "3",
                "Content": "Muito bom Higor, parabéns!! 👏👏",
                "LikesAmount": 10
            },
        
            {
                "Id": 2,
                "UserName": "Juan Garcia",
                "ProfilePic": "https://avatars.githubusercontent.com/u/61752887?v=4",
                "IsTheCurrentUser": true,
                "PublishTime": "4",
                "Content": "Belo projeto amigo :)",
                "LikesAmount": 3
            }
        ]
    },

    {
        "Id": 2,
        "Content": [
            {
                "Id": 1,
                "UserName": "Jenny Wilson",
                "ProfilePic": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                "IsTheCurrentUser": false,
                "PublishTime": "1",
                "Content": "Adorei seu novo portifa Leonard!",
                "LikesAmount": 1
            },
        
            {
                "Id": 2,
                "UserName": "Bessie Cooper",
                "ProfilePic": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=60",
                "IsTheCurrentUser": false,
                "PublishTime": "2",
                "Content": "Parabens, sei bem como é a sensação",
                "LikesAmount": 5
            },
        
            {
                "Id": 3,
                "UserName": "Devon Lane",
                "ProfilePic": "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=60",
                "IsTheCurrentUser": false,
                "PublishTime": "6",
                "Content": "💜💜",
                "LikesAmount": 0
            }
        ]
    }
]

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


    useEffect(()=>{
        //@ts-ignore
        setComments(comments)
        //@ts-ignore
        setPosts(posts);
    }, [])


    function findTheRelatedCommentsArray (Content: Posts["Content"]) {
        const foundComments = Comments?.find(Comment => Comment.Id === Content.CommentId);

        if(!foundComments) return [];

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