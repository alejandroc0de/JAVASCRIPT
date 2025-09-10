function generatePassword(passwordLenght,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnñopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "$#%&(?¡*¨";
    
    let allowChars = "";
    let password = "";


    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSymbols ? symbolChars : "";
    
    
    if(passwordLenght <= 0){
        return '(password lenght has to be at least 1)';

    }
    if(allowChars.length===0){
        return 'Mark at least 1 option for characteres';
    }


    for(let i = 0; i<passwordLenght; i++){
        const randomIndex = Math.floor(Math.random()*allowChars.length);
        password += allowChars[randomIndex];

    }



    return password;
}


const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLenght,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

console.log(`Password generated: ${password}`);