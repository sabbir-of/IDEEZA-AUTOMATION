const { dappwright } = require('@tenkeylabs/dappwright');
const fs = require('fs');

module.exports = async () => {
  const [wallet, _, context] = await dappwright.bootstrap("", {
    wallet: "metamask",
    // other configurations...
  });

  // Save wallet and context information in a file or a global variable
  fs.writeFileSync('walletData.json', JSON.stringify({ /* details from wallet and context */ }));
};