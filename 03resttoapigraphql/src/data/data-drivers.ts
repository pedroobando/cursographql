import { checkRound, checkYear, paginationOptions } from '../lib/utils';
import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return await this.get(`drivers.json?limit=1000`, {
        cacheOptions: { ttl: 60 },
      });
    }
    const filter = paginationOptions(pageElements, page);
    return await this.get(`drivers.json?${filter}`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriversByYear(year: string) {
    year = checkYear(year);
    return await this.get(`${year}/drivers.json`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriversByYearAndRound(year: string, round: number = 1) {
    year = checkYear(year);
    round = checkRound(round);
    return await this.get(`${year}/${round}/drivers.json`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriver(id: string) {
    return await this.get(`/drivers/${id}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getSeasonsPilotsRanking(year: string) {
    year = checkYear(year);
    return await this.get(`${year}/driverStandings.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
