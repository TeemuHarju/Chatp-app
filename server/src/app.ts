import express from "express";

import { router as loginRouter } from "./routes/login.route";

const app = express();

app.use(express.json());

app.use(loginRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});