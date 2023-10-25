// Import the MegaventoryAPI class and other required modules
const MegaventoryAPI = require('./megaventoryAPI');
const config = require('./config');
const productData = require('./productData');
const productSupplierClientData = require('./productSupplierClientData');
const locationData = require('./locationData');
const relationshipData = require('./relationshipData');
const availabilityData = require('./availabilityData');

// Create an instance of the MegaventoryAPI with the provided API key
const megaventory = new MegaventoryAPI(config.API_KEY);

// Asynchronous function to insert an entity (e.g., Product, SupplierClient, etc.)
async function insertEntity(entityType, data) {
  try {
    // Use the MegaventoryAPI instance to insert the specified entity
    const result = await megaventory.insertEntity(entityType, data);
    console.log(`${entityType} inserted:`, result);
  } catch (error) {
    // Log an error message if entity insertion fails
    console.error(`Error inserting ${entityType}:`, error.message);
  }
}

// Insert various entities using the MegaventoryAPI instance
insertEntity('Product', productData);
insertEntity('SupplierClient', productSupplierClientData);
insertEntity('InventoryLocation', locationData);
insertEntity('ProductClient', relationshipData.productClientRelationship);
insertEntity('ProductSupplier', relationshipData.productSupplierRelationship);
insertEntity('SupplierStock', availabilityData);
