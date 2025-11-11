import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { typeDefs } from './schema.graphql';
import { resolvers } from './graphql/resolvers';
import { GCPPostgres } from './db/gcpPostgres';

const startServer = async () => {
    const app = express();

    // Connect to PostgreSQL database
    await createConnection(GCPPostgres);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer().catch(error => {
    console.error('Error starting the server:', error);
});