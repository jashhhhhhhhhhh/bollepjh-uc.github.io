var visible = false;

function showOrHideEmail() {
    if (visible) {
        document.getElementById('email').innerHTML = " Show my Email";
        visible = false;
    } else {
        var myEmail = "<a href='mailto:bjaswanth24@gmail.com'>bjaswanth24@gmail.com</a>";
        document.getElementById('email').innerHTML = myEmail;
        visible = true;
    }
}
