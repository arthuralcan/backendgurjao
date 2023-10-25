const express = require("express");
const router = express.Router();
const Secretaria = require("../models/Secretarias");

router.get("/", async (req, res) => {
    res.json(await Secretaria.find());
});

router.get("/:id", async (req, res) => {
    res.json(await Secretaria.findById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await Secretaria.create(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await Secretaria.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await Secretaria.findByIdAndRemove(req.params.id));
});

module.exports = router;
