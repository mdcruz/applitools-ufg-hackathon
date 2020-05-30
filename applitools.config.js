module.exports = {
  appName: 'AppliFashion',
  batchName: 'UFG Hackathon',
  browser: [
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
    { width: 1200, height: 700, name: 'chrome' },
    { width: 1200, height: 700, name: 'firefox' },
    { width: 1200, height: 700, name: 'edgechromium' },
    { width: 768, height: 700, name: 'chrome' },
    { width: 768, height: 700, name: 'firefox' },
    { width: 768, height: 700, name: 'edgechromium' },
  ],
  concurrency: 10,
};
