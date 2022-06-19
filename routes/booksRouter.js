import express  from "express";
import booksController from "../controllers/booksController.js";
let router = express.Router();

router.get("/", booksController.index);
router.get("/create", booksController.create);
router.post("/store", booksController.store);
router.get("/:id/edit", booksController.edit);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.destroy);

export default router;

