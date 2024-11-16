const path = require('path');
const {config} = require('./wdio.shared.conf');

config.port = 4723

config.specs = [
    './test/specs/**/*.js'
]

config.capabilities = [{
    platformName: 'Android',
    // browserName: 'Chrome',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(),'\\app\\apidemos.apk')
}]

exports.config = config;
