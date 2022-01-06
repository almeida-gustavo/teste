/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { getCustomRepository, Repository } from 'typeorm';

import PilotsRepository from '../repositories/Pilot';

export class PilotsService {
  repo: PilotsRepository;

  constructor() {
    this.repo = new PilotsRepository();
  }

  async listPilots() {
    const pilots = await this.repo.listPilots();
    return pilots;
  }
}
