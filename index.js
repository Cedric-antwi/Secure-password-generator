const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnGenerator = document.getElementById("generator")
let randPassword1 = document.getElementById("password-el1")
let randPassword2 = document.getElementById("password-el2")

function generatePasswords() {
    randPassword1.textContent = " "
    randPassword2.textContent = " "
    for (let i=0; i < 15; i++) {        
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        //console.log(characters[randomChar])
        randPassword1.textContent += characters[randomChar1]
        randPassword2.textContent += characters[randomChar2]
        
    }
    
}

