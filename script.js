
function validEmail(str) {
    const regex = /^[\w]+([.-][\w]+)*@[\w]+([.-][\w]+)*\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})*$/;
    return regex.test(str);
}


const str = prompt("Enter an email address.");
alert(validEmail(str));

