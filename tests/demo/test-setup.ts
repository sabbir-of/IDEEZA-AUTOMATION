const { test: baseTest } = require('@playwright/test');
const fs = require('fs');

const test = baseTest.extend({
  wallet: async ({}, use) => {
    // Retrieve wallet details from the file
    const walletData = JSON.parse(fs.readFileSync('walletData.json'));
    // Initialize the wallet using walletData
    await use(walletData);
  },
});

module.exports = test;