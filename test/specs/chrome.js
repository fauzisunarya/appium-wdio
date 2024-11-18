const ChromeObjects = require('../pageobjects/chromeObjects')
const chromeObjects = new ChromeObjects(); 


describe('suite', () => {
    it('test', async () => {
        await chromeObjects.openChrome.click();
        await browser.pause(5000)
        expect(await chromeObjects.classText.getText()).toHaveText('Search or type web address')
    })
})
