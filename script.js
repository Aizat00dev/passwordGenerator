let btn = document.querySelector('#btn')
let passOne = document.querySelector("#pass-one")
let passTwo = document.querySelector('#pass-two')

const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
    "b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0",
     "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
     "!","@","#","$","%","^","&","*","(",")","_","-","+",
     "=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    
let password1 = ''
let password2 = ''

btn.addEventListener( "click", function(){
   
    for(let i=0; i<15; i++){
        let randomPassOne = (Math.floor(Math.random()* characters.length))
        password1 += characters[randomPassOne]
        
        }
       passOne.textContent = password1
       password1 = ''
    
         

        
    
     for(let i=0; i<15; i++){
        let randomPassTwo = (Math.floor(Math.random()* characters.length))
        password2 += characters[randomPassTwo]
        
        }
        passTwo.textContent = password2
       
        password2 = ''
    
}) 
 



 
 
 
 