import { EntityRepository, Repository } from 'typeorm';

import Pilots from '../../models/Pilot';

@EntityRepository(Pilots)
class PilotsRepository extends Repository<Pilots> {
  async listPilots() {
    const pilots = this.find();

    return pilots;
  }
}

export default PilotsRepository;
