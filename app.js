let arrData = [];

if (sessionStorage.arrData != null) {
    arrData = JSON.parse(sessionStorage.arrData);
}

let form = document.getElementById("new-person")
form.addEventListener("submit",function mydata (event)  {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    let email = event.target.email.value;
    let phonenumber = event.target.phoneNumber.value;

    function validate(){

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const usernameRegex = /^\S+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^07\d{8}$/;

    // let valid = true;



    if (!usernameRegex.test(username)) {
        alert("enter a user name with no space")
        // valid=false;
        return false;
    }
    if (arrData.includes(username)) {

        alert("this Username is already exists, please choose another one.");
        // valid=false;
        return false;
    }
    // if (!passwordRegex.test(password)) {
    //     alert(`Please enter a valid password `);
    //     // valid=false;
    //     return false;
    // }
    if (!emailRegex.test(email)) {
        alert(`enter a valid email`)
        // valid=false;
        return false;
    }
    if (!phoneRegex.test(phonenumber)) {
        alert(`start your phone number with 07 then 8 digits`)
        // valid=false;
        return false;
    }

    return true;

    // if (valid = true) {
    //     arrData.push(username);
    //     sessionStorage.setItem('arrData', JSON.stringify(arrData));
        //     sessionStorage.setItem("username", `${username}`);
        // sessionStorage.setItem("password", `${password}`);
        // sessionStorage.setItem("email", `${email}`);
        // sessionStorage.setItem("phonenumber", `${phonenumber}`);
    // }
}

if (validate()===true) {
    arrData.push(username);
sessionStorage.setItem('arrData',JSON.stringify(arrData) );}
})
