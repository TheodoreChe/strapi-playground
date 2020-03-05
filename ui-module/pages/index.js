import Link from "next/link";
import { Query } from "../components/query";
import { MESSAGES } from "../modules/messages";

const Home = () => (
    <main>
      <h1>Strapi Playground</h1>
      <Query query={MESSAGES}>
        {
          ({ data: { messages } }) => messages.map(msg => (
              <Link href={{ pathname: "message", query: { id: msg.id} }}>
                  {msg.title}
              </Link>
          ))
        }
      </Query>
    </main>
);

export default Home
