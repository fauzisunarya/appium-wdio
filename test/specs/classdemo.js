
describe('suite', () => {
    it('test', async () => {
        const chromeApp = await $('~Chrome')
        await browser.pause(5000)
        await chromeApp.click();
        await browser.pause(5000)
        const className = await $('android.widget.EditText')
        const text = className.getText()
        console.log(text)
        expect(await className.getText()).toHaveText('Search or type web address')
    })
})

