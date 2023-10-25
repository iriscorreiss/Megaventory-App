const MegaventoryAPI = require('./megaventoryAPI');
const config = require('./config');
const productData = require('./productData');
const productSupplierClientData = require('./productSupplierClientData');
const locationData = require('./locationData');
const relationshipData = require('./relationshipData');
const availabilityData = require('./availabilityData');

const megaventory = new MegaventoryAPI(config.API_KEY);

async function insertEntity(entityType, data) {
  try {
    const result = await megaventory.insertEntity(entityType, data);
    console.log(`${entityType} inserted:`, result);
  } catch (error) {
    console.error(`Error inserting ${entityType}:`, error.message);
  }
}

// Insert the entities using the MegaventoryAPI instance
insertEntity('Product', productData);
insertEntity('SupplierClient', productSupplierClientData);
insertEntity('InventoryLocation', locationData);
insertEntity('ProductClient', relationshipData.productClientRelationship);
insertEntity('ProductSupplier', relationshipData.productSupplierRelationship);

insertEntity('SupplierStock', availabilityData);
