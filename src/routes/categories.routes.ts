import path from "node:path";
import { Router } from "express";
import multer from "multer";
import { format } from "date-fns";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";

const categoriesRoutes = Router();

const DESTINATION_FOLDER = path.resolve(__dirname, "../../tmp");

const upload = multer.diskStorage({
  destination: DESTINATION_FOLDER,
  filename: (request, file, callback) => {
    const formatDate = format(new Date(), "dd-MM-yyyy");
    const fileName = `${formatDate}_${file.originalname}`;

    return callback(null, fileName);
  },
});

const uploadFile = multer({
  dest: DESTINATION_FOLDER,
  storage: upload,
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/upload",
  uploadFile.single("file"),
  (request, response) => {
    return importCategoriesController.handle(request, response);
  }
);

export { categoriesRoutes };
