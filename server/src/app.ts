import express from "express";

import { router as loginRouter } from "./routes/login.route";
import "./env";

const app = express();

app.use(express.json());

app.use(loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
