import { useEffect, useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';

import Styles from './PostComment.module.css';

interface PropsInterface {
    CommentsContent: {
        Id: number;
        UserName: string;
        ProfilePic: string;
        IsTheCurrentUser: boolean;
        PublishTime: number;
        Content: string;
        LikesAmount: number;
    }
    DeleteComment: (Arg: number) => void;
}

export function PostComment({CommentsContent, DeleteComment}: PropsInterface){
    const [LikesAmount, setLikesAmount] = useState(3);
    const [IsLikePressed, setIsLikePressed] = useState(false);

    useEffect(()=>{
        setLikesAmount(CommentsContent.LikesAmount);
    }, [])
    
    function HandleDeleteComment() {
        DeleteComment(CommentsContent.Id);
    }
    
    return(
        <div className={Styles.Comment}>
            <img src={CommentsContent.ProfilePic} alt='Imagem de perfil do usuário'></img>
            <div className={Styles.Content}>
                {
                    CommentsContent.IsTheCurrentUser ? 
                        <Trash
                         data-title='Deletar comentário'
                         tabIndex={0}
                         className={Styles.Trash}
                         onClick={HandleDeleteComment}
                        />
                    : null
                }
                <header>

                    {
                        CommentsContent.IsTheCurrentUser ? 
                            <div>
                                <h2>{CommentsContent.UserName}</h2>
                                <span>(você)</span>
                            </div>
                        : 
                            <h2>
                                {CommentsContent.UserName}
                            </h2>
                    }

                    <time
                     title='Públicado em 31 de maio de 2050'
                     dateTime='2050-05-31 00:00:00'
                    >
                        Cerca de {CommentsContent.PublishTime}h
                    </time>

                </header>
                <p>
                    {CommentsContent.Content}
                </p>
            </div>

            <div
             className={Styles.Reactions}
             onClick={()=> {
                 setIsLikePressed(!IsLikePressed);
                 IsLikePressed ? setLikesAmount(LikesAmount - 1) : setLikesAmount(LikesAmount + 1);
                }}
             data-notfocus={IsLikePressed ? 'true' : 'false'}
            >
                    <ThumbsUp
                     weight='bold'
                     style={
                        IsLikePressed ? {
                           color: 'var(--green-500)',
                        } : {}
                     } 
                    />
                    <span
                     style={
                        IsLikePressed ? {
                           color: 'var(--green-500)',
                        } : {}
                     }
                    >
                        Aplaudir • {LikesAmount}
                    </span>
            </div>
        </div>
    )
}