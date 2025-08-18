import { Router } from "express";
import { urlPOST, urlGET } from "../Controller/control.js";

const urlRoute = Router();

urlRoute.get('/', (req, res) => {
    res.send("index.html")
})

urlRoute.post('/shortenID', urlPOST)

urlRoute.get('/:URLshortenID', urlGET)

export default urlRoute;