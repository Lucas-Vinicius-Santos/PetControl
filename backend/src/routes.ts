import { Router } from "express";
import { OutlayController } from "./controllers/OutlayController";

import { PetController } from "./controllers/PetController";

const routes = Router();

routes.get("/pet", new PetController().getAllPets);
routes.post("/pet", new PetController().createPet);
routes.put("/pet/:id", new PetController().updatePet);
routes.delete("/pet/:id", new PetController().deletePet);

routes.get("/outlay", new OutlayController().getAllOutlays);
routes.get("/outlay/:id", new OutlayController().getOutlay);
routes.post("/outlay", new OutlayController().createOutlay);
routes.put("/outlay/:id", new OutlayController().updateOutlay);
routes.delete("/outlay/:id", new OutlayController().deleteOutlay);

export default routes;
