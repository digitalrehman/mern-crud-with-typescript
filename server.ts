import app from "./src/app.ts";
import configuration from "./src/config/config.ts";
const port = configuration.PORT || 3000;

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
