import "dotenv/config";
const _config = {
  PORT: process.env.PORT,
};
const configuration = Object.freeze(_config);
export default configuration;
