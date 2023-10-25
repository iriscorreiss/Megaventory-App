const axios = require('axios');
const config = require('./config');

class MegaventoryAPI {
  constructor() {
    this.BASE_URL = 'https://api.megaventory.com/v2017a';
    this.config = config;
  }

  async makeRequest(endpoint, data) {
    try {
      const response = await axios.post(`${this.BASE_URL}/${endpoint}?APIKEY=${this.config.API_KEY}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("connected");
      return response.data;

    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  

  async insertEntity(entityType, data) {
    data.mvInsertUpdateDeleteSourceApplication = this.config.SOURCE_APPLICATION; // Fix the property name here
    const endpoint = `${entityType}/${entityType}Update`;
    const result = await this.makeRequest(endpoint, data);
    return result;
  }
}

module.exports = MegaventoryAPI;
