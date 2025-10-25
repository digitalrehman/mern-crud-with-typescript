import app from "./src/app.ts";
import configuration from "./src/config/config.ts";
import db_connection from "./src/config/dbconnection.ts";
const port = configuration.PORT || 3000;

db_connection()

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
