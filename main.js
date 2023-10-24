function genPassword() {
    var length = document.getElementById("length").value;
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("output").value = password;
    document.getElementById("length-val").textContent = length;
}

function copyClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}

genPassword(); // Run once on load to populate initial password