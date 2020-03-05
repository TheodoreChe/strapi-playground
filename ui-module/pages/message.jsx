import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { Query } from "../components/query";
import { MESSAGE } from "../modules/messages";

const Message = () => {
    const router = useRouter();
    return (
        <Query query={MESSAGE} id={Number(router.query.id)}>
            {
                ({ data: { message } }) => (
                    <div>
                        <h1>{message.title}</h1>
                        <img src={process.env.API_URL + message.image.url} alt />
                        <p>
                            <ReactMarkdown source={message.content}/>
                        </p>
                    </div>
                )
            }
        </Query>
    )
};

export default Message
