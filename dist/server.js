// import express from "express";
// import bodyParser from "body-parser";
// import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
// import { makeExecutableSchema } from "graphql-tools";
// import { gql } from "apollo-server";
// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
// `;
// const books = [
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowling"
//   },
//   {
//     title: "Jurassic Park",
//     author: "Michael Crichton"
//   }
// ];
// const resolvers = {
//   Query: {
//     books: () => books
//   }
// };
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// });
// const app = express();
// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
// app.set("port", process.env.PORT || 5000).listen(app.get("port"), () => {
//   console.log(
//     `App is running on port ${app.get("port")} in ${app.get("env")} mode.`
//   );
// });
console.log("Hey 👋");
//# sourceMappingURL=server.js.map