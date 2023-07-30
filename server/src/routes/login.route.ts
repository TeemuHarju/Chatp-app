import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
    console.log(req.body);
    const { username, password } = req.body;
    res.send(username + " " + password);

});

export { router };