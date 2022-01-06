import { Router, Request, Response } from 'express';

import { PilotsService } from '../services/Pilot';

const pilotService = new PilotsService();

const controller = Router();

controller.get('', async (req: Request, res: Response) => {
  const pilots = await pilotService.listPilots();
  return res.status(200).json(pilots);
});

export default controller;
