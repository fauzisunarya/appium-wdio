class RegisterPage{

    get openPGN(){
        return $('~New PGN Mobile');
    }

    get permissionFirst(){
        return $('id:com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    }
    get permissionTwo(){
        return $("id:com.android.permissioncontroller:id/permission_allow_button");
    }
    
    get permissionThree(){
        return $("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
    }

    get btnDaftar(){
        return $('~Daftar');
    }
    get inputNomorHP () {
        return $("-android uiautomator:new UiSelector().resourceId(\"field-nomor-hp\")");
    }

    get inputEmail () {
        return $("-android uiautomator:new UiSelector().resourceId(\"field-email\")");
    }

    get inputPassword () {
        return $("-android uiautomator:new UiSelector().resourceId(\"field-password\")");
    }

    get btnSelanjutnya () {
        return $('~Selanjutnya');
    }

    get classText(){
        return $('android.view.View');

    }

    // Method to handle permissions and click btnDaftar if permissions are not found
    async handlePermissionsAndRegister() {
        try {
            // Try to click the first permission button
            await this.permissionFirst.click();
        } catch (error) {
            console.log('Permission First not found, skipping...');
        }

        try {
            // Try to click the second permission button
            await this.permissionTwo.click();
        } catch (error) {
            console.log('Permission Two not found, skipping...');
        }

        try {
            // Try to click the third permission button
            await this.permissionThree.click();
        } catch (error) {
            console.log('Permission Three not found, skipping...');
        }

        // Always click the btnDaftar button
        await this.btnDaftar.click();
    }


    async login (inputNomorHP, inputEmail, inputPassword) {
        await this.inputNomorHP.click();
        await this.inputNomorHP.addValue(inputNomorHP);
        await this.inputEmail.click();
        await this.inputEmail.addValue(inputEmail);
        await this.inputPassword.click();
        await this.inputPassword.addValue(inputPassword);
        await this.btnSelanjutnya.click();
    }

}
module.exports = RegisterPage;