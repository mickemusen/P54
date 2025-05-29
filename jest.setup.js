// Mock Google Apps Script environment
beforeAll(() => {
  global.Logger = {
    log: jest.fn()
  };
  
  // Add other GAS globals you might use
  global.SpreadsheetApp = {
    getActiveSpreadsheet: jest.fn(),
    // ... other methods you use
  };
});