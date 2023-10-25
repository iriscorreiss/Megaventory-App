// productSupplierClientData.js
module.exports = [
    // Define your supplier/client data here as an array of objects
    {
      mvSupplierClient: {
        SupplierClientType: 'Client',
        SupplierClientName: 'babis',
        mvContacts: [
          {
            ContactEmail: 'babis@exampletest.com',
            ContantIsPrimary: 'true',
          },
        ],
        SupplierClientBillingAddress: 'Example 8, Athens',
        SupplierClientPhone1: '1235698967',
      },
      mvRecordAction: 'Insert',
    },
    {
      mvSupplierClient: {
        SupplierClientType: 'Supplier',
        SupplierClientName: 'odysseus',
        mvContacts: [
          {
            ContactEmail: 'odysseus@exampletest.com',
            ContantIsPrimary: 'true',
          },
        ],
        SupplierClientBillingAddress: 'Example 10, Athens',
        SupplierClientPhone1: '1235698988',
      },
      mvRecordAction: 'Insert',
    },
  ];
  