import Link from "next/link";
import { Query } from "../components/query";
import { MESSAGES } from "../modules/messages";

const Home = () => (
    <main>
      <h1>Strapi Playground</h1>
      <Query query={MESSAGES}>
        {
          ({ data: { messages } }) => messages.map(msg => (
              <p>
                  <Link href={{ pathname: "message", query: { id: msg.id} }}>
                      {msg.title}
                  </Link>
              </p>
          ))
        }
      </Query>
    </main>
);

export default Home
