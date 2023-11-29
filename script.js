const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnoparstuvwxyz"
const numberSet = "123456789"
const symbolSet = "!@#$%^&*()_+"

const totalInput = document.getElementById("total")
const passBox = document.getElementById("pass-box")
const lowerInput = document.getElementById("lowercase")
const upperInput = document.getElementById("uppercase")
const numberInput= document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")





const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }if(numberInput.checked){
        password += getRandomData(numberSet)
    }if(symbolInput.checked){
        password += getRandomData(symbolSet)
    
    }
    if(password.length < total.value) {
    return generatePassword(password)
}

passBox.innerText = truncateString(password, total.value);
}
generatePassword();


document.getElementById ("btn").addEventListener(
     "click",
     function () {
        generatePassword();
     }

);

function truncateString(str,num) {
    if (str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else {
        return str;
    }
}