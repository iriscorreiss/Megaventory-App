const axios = require('axios');
const config = require('./config');

class MegaventoryAPI {
  constructor() {
    // The base URL for the MegaVentory API
    this.BASE_URL = 'https://api.megaventory.com/v2017a';
    // Configuration containing the API key
    this.config = config;
  }

  // Method to make a POST request to the MegaVentory API
  async makeRequest(endpoint, data) {
    try {
      // Send a POST request to the specified endpoint with API key as a query parameter
      const response = await axios.post(`${this.BASE_URL}/${endpoint}?APIKEY=${this.config.API_KEY}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Connected"); // Log a message when the request is successful
      return response.data; // Return the response data

    } catch (error) {
      console.error('Error:', error.message); // Log an error message if the request fails
      return null; // Return null to indicate an error occurred
    }
  }

  // Method to insert an entity (e.g., a product) into MegaVentory
  async insertEntity(entityType, data) {
    // Generate the endpoint URL for inserting the specified entity
    const endpoint = `${entityType}/${entityType}Update`;
    // Make a request to insert the entity and return the result
    const result = await this.makeRequest(endpoint, data);
    return result;
  }
}

module.exports = MegaventoryAPI;
