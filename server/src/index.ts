import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(helmet());

  // ----- User endpoints -----

  app.get("/users", (_req, _res) => {
    // TODO: Get all users
  });

  app.get("/users/:id", (_req, _res) => {
    // TODO: Get specific user
  });

  app.post("/users", (_req, _res) => {
    // TODO: Create user
  });

  // ----- Post endpoints -----

  app.get("/posts", (_req, _res) => {
    // TODO: Get all posts
  });

  app.get("/posts/:id", (_req, _res) => {
    // TODO: Get specific post
  });

  app.post("/posts", (_req, _res) => {
    // TODO: Create post
  });

  // ----- Root endpoint -----

  app.get("/", (_req, res) => {
    res.json({
      message: "Compass - The Team Building App",
    });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
};

main().catch((err) => {
  console.error(err);
});
