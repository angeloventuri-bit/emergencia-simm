process.chdir(__dirname);
require("child_process").execSync("npx next dev -p 3001", { stdio: "inherit" });
