import { F1 } from './data-source';

export class SeasonsData extends F1 {
  constructor() {
    super();
  }

  async getSeasons() {
    return await this.get('seasons.json?limit=100', {
      cacheOptions: { ttl: 60 },
    });
  }
}
