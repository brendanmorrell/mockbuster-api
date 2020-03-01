"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tools_1 = require("graphql-tools");
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling"
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton"
    }
];
const resolvers = {
    Query: {
        books: () => books
    }
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers
});
const app = express_1.default();
app.use("/graphql", body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema }));
app.use("/graphiql", apollo_server_express_1.graphiqlExpress({ endpointURL: "/graphql" }));
app.set("port", process.env.PORT || 5000).listen(app.get("port"), () => {
    console.log(`App is running on port ${app.get("port")} in ${app.get("env")} mode.`);
});
//# sourceMappingURL=index.js.map