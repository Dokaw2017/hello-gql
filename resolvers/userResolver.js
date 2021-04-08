import { AuthenticationError } from "apollo-server-express";
import { login } from "../passport/authenticate.js";

export default {
  Query: {
    login: async (parent, args, { req, res }) => {
      // inject username and password to req.body for passport
      console.log(args);
      req.body = args;
      try {
        const authResponse = await login(req, res);
        console.log("authrsponse", authResponse);
        return {
          id: authResponse.user.id,
          username: authResponse.user.username,
          token: authResponse.token,
        };
      } catch (e) {
        throw new AuthenticationError("invalid credentials");
      }
    },
  },
};
