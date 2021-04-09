import { ApolloServer } from "apollo-server-express";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";
import { checkAuth } from "./passport/authenticate.js";
import connectMongo from "./db/db.js";
import localhost from "./security/localhost.js";
import production from "./security/production.js";
import dotenv from "dotenv";
//do that in your controler/resolver
//import bcrypt from "bcrypt";

dotenv.config();

(async () => {
  try {
    const connect = await connectMongo();
    if (connect) {
      console.log("connected succesfully");
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        if (req) {
          const user = await checkAuth(req, res);
          console.log("app", user);
          return {
            req,
            res,
            user,
          };
        }
      },
    });

    const saltRound = 12; //okayish in 2021

    // inside your user create/update async function
    /*const myPwd = "bar";
    const hash = await bcrypt.hash(myPwd, saltRound);
    console.log("hashed password", hash);*/

    const app = express();

    server.applyMiddleware({ app });
    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    if (process.env.NODE_ENV === "production") {
      production(app, 3000);
    } else {
      localhost(app, 8000, 3000);
    }
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
