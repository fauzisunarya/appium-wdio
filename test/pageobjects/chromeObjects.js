class ChromeObjects{
    get openChrome(){
        return $('~Chrome');
    }

    get classText(){
        return $('android.widget.EditText');

    }
}
module.exports = ChromeObjects();