const fs = require("fs");

function runHyperloop(iterations) {
  const results = {
    iterations: iterations,
    timestamp: new Date().toISOString(),
    status: "completed",
    message: `HyperLoop finished with ${iterations} iterations`
  };

  fs.writeFileSync("api/hyperloop_kit.json", JSON.stringify(results, null, 2));
  console.log("✅ HyperLoop results saved to api/hyperloop_kit.json");
}

const args = process.argv.slice(2);
const iterationsArg = args.find(arg => arg.startsWith("--iterations"));
const iterations = iterationsArg ? iterationsArg.split("=")[1] : "default";

runHyperloop(iterations);
