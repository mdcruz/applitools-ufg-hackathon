const fs = require('fs-extra');
const path = require('path');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = `../../../cypress.${file}.json`;
  return !!file && fs.readJson(path.join(__dirname, '../', pathToConfigFile));
};

module.exports = (on, config) => {
  const enviroment = config.env.configFile;
  const configForEnviroment = getConfigurationByFile(enviroment);
  return configForEnviroment || config;
};
