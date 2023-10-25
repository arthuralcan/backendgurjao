const express = require("express");
const router = express.Router();
const Noticias = require("../models/Noticias");

router.get("/", async (req, res) => {
    res.json(await Noticias.find());
});

// teste

router.get("/:id", async (req, res) => {
    res.json(await Noticias.findById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await Noticias.create(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await Noticias.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await Noticias.findByIdAndRemove(req.params.id));
});

module.exports = router;
