import { Request, Response } from "express";
import { OutlayService } from "../services/OutlayService";

export class OutlayController {
  async getAllOutlays(req: Request, res: Response) {
    const service = new OutlayService();

    const result = await service.getAllOutlays();

    return res.json(result);
  }

  async createOutlay(req: Request, res: Response) {
    const { title, price, pet_id } = req.body;

    const service = new OutlayService();

    const result = await service.createOutlay({ title, price, pet_id });

    if (result instanceof Error) {
      res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  async updateOutlay(req: Request, res: Response) {
    const { id } = req.params;
    const { title, price, pet_id } = req.body;

    const service = new OutlayService();

    const result = await service.updateOutlay({ id, title, price, pet_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  async deleteOutlay(req: Request, res: Response) {
    const { id } = req.params;

    const service = new OutlayService();

    const result = await service.deleteOutlay(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
