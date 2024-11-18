const RegisterPage = require('../pageobjects/register_page');
const registerPage = new RegisterPage(); 


describe('Register PGN Mobile', () => {
    it('register user sudah terdaftar', async () => {
        await registerPage.openPGN.click()
        await registerPage.permissionFirst.click()
        await registerPage.permissionTwo.click()
        await registerPage.permissionThree.click()
        await registerPage.btnDaftar.click()
        await registerPage.login('82261543919', 'ada@gmail.com', 'Fauzi@1999')
        const actualText = await registerPage.classText.getText();
        console.log('Teks ditemukan:', actualText);
        expect(actualText).toHaveText('Nomor telepon sudah terdaftar');
    })
})