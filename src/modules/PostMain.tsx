import Styles from './PostMain.module.css';

interface PostMainProps {
    Content: {
        Type: "Paragraph" | "Link";
        Content: string;
    }[];
}

export function PostMain({Content}:PostMainProps){

    return(
        <main className={Styles.Main}>
            {
                Content?.map((element, index) => {
                    switch(element.Type){
                        case "Paragraph":
                            return(
                                <p
                                key={index}
                                >
                                    {element.Content}
                                </p>
                            );
                            
                        case "Link":
                            return (
                                <a
                                 href=''
                                 key={index}
                                >
                                    {element.Content}
                                </a>
                            );
                    }
                })
            }
        </main>
    )
}