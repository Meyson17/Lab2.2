const { express } = require("express");
const app = express();
app.use (express.static(__dirname));
app.get("/", function(request, response){
  response.sendFile(`${__dirname}/index.html`);
});
app.listen(3002,()=>{console.log("aboba")});
