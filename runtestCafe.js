const createTestCafe = require("testcafe");
const selfSignedSertificate = require("openssl-self-signed-certificate");

const sslOptions = {
  key: selfSignedSertificate.key,
  cert: selfSignedSertificate.cert,
};

(async function () {
  const testcafe = await createTestCafe(
    {
      hostname: 'localhost',
      port1:    1337,
      port2:    1338,
      // experimentalProxyless: true,
      sslOptions,
    });
  
  const runner = process.argv.includes("--live")
  ? testcafe.createLiveModeRunner()
  : testcafe.createRunner();
  

    
    await runner.run({
      debugMode:process.argv.includes("--debug-mode"),
      debugOnFail: process.argv.includes("--debug-on-fail")
    });

    await testcafe.close();
  })();
  
