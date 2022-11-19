//  Objects to store details
let userDetailsDatabase = {}


function getUserDetails() {


    //username
    let userName = prompt('Enter your username')

    if (userName == null) {
        return
    }

    function validateUserName(userName) {
        if (userName.length < 10 && userName.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    while (validateUserName(userName) == false) {
        userName = prompt('username must be less than 10 and greater than 0')
    }

    userDetailsDatabase['userName'] = userName

    //Email Address

    let email = prompt('enter your email address')

    if (email == null) {
        return
    }

    function validateEmail(email) {
        const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true) {
            return true
        } else {
            return false
        }
    }

    while (validateEmail(email) == false) {
        email = prompt('Enter a valid email')
    }

    userDetailsDatabase['Email'] = email


    // Phone Number

    let phoneNumber = prompt('Enter your phone number')

    if (phoneNumber == null) {
        return
    }

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        } else {
            return false
        }
    }

    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt('Phone number must be 11 digit')
    }

    userDetailsDatabase['phoneNumber'] = phoneNumber


    //Password


    let password = prompt('Enter your password')

    if (password == null) {
        return
    }

    function validatePassword(Password) {
        if (Password.length == 6) {
            return true;
        } else {
            return false;
        }

    }
    while (validatePassword(password) == false) {
        password = prompt('Passwor must not be less than 6')
    }

    userDetailsDatabase['password'] = password


    // Confirm password

    let confirmPassword = prompt('confirmPassword')

    if (confirmPassword == null) {
        return
    }

    function validateConfirmPassword(confirmPassword) {
        if (confirmPassword != false) {
            return true;
        } else {
            return false;
        }
    }

    while (validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt('Confirm password does not match, try again')
    }


}




function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nPhoneNumber: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.Email}`)
}
    



















// Standard email vvaidation for Javascript

    // const emailCheck =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //emailCheckResult = emailCheck.test(email);





