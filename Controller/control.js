import DBmodel from "../Model/url.js";
import { nanoid } from "nanoid";

export function urlPOST(req, res) {
    let {url} = req.body
    let shortenID = nanoid(8)
    const newURL = DBmodel.create({
        originalURL: url,
        shortenID
    })
    res.json({shortenID: `http://localhost:3000/${shortenID}`})
}

export async function urlGET(req, res) {
    try {
        const {URLshortenID} = req.params;

        const entry = await DBmodel.findOne({ shortenID: URLshortenID });

        if (!entry) {
            return res.status(404).send("404 URL not valid");
        }

        res.redirect(entry.originalURL);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
}