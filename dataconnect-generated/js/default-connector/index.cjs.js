const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'health-records-toma-test',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

