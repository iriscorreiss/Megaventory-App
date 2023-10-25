MegaVentory API Integration


This repository contains a Node.js application that provides a seamless integration with the MegaVentory API. MegaVentory is a service that helps businesses manage their inventory and relationships with suppliers and clients. With this application, you can easily insert and update product information, supplier/client data, inventory locations, and availability information using the MegaVentory API.

Getting Started
Before you begin using this application, you need to set up your API key. Follow these steps:

Obtain your MegaVentory API key.
Create a config.js file in the root directory of the application and add your API key as follows:
javascript
Copy code
const config = {
  API_KEY: 'YOUR_API_KEY_HERE',
};

module.exports = config;
Usage
This application allows you to insert various entities into your MegaVentory account, including products, suppliers/clients, inventory locations, and availability data. Here's how you can use it:

Import the required modules and create an instance of the MegaventoryAPI class in your index.js file, as shown below:
javascript
Copy code
const MegaventoryAPI = require('./megaventoryAPI');
const config = require('./config');
// ... (other imports)

const megaventory = new MegaventoryAPI(config.API_KEY);
Use the insertEntity function to insert different entities. For example, to insert a product, use:
javascript
Copy code
insertEntity('Product', productData);
Replace 'Product' with the entity type you want to insert (e.g., 'SupplierClient', 'InventoryLocation') and provide the data accordingly.

The application will send a POST request to the MegaVentory API and log the result. If the insertion is successful, you will see a success message. If there is an error, an error message will be displayed.
Data Files
The application uses separate data files for different entity types, making it easy to manage and modify the data you want to insert. These data files are located in the root directory of the application and include:

productData.js: Product data.
productSupplierClientData.js: Supplier/client data.
locationData.js: Inventory location data.
relationshipData.js: Relationship data for products and clients/suppliers.
availabilityData.js: Availability data for products.
You can customize the data in these files to match your specific requirements.

Contributing
Feel free to contribute to this repository by submitting issues, proposing new features, or making improvements to the existing codebase.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to MegaVentory for providing the API that makes this integration possible.

Enjoy using this application to streamline your inventory management with MegaVentory!
