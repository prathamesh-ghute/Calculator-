//// it's the incomplete code 


let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four= document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let add = document.querySelector("#add");
let subtraction= document.querySelector("#sub");
let multiplication = document.querySelector("#mul");
let division = document.querySelector("#divison");
let perscentage = document.querySelector("#persc");
let clear = document.querySelector("#clear");
let delet = document.querySelector("#delete");
let answer = document.querySelector("#ans");
let dot= document.querySelector("#dot");
let combine = document.querySelector("#asdi");

let input = document.querySelector("#input");

// input.addEventListener("input",(event)=>{
//     console.dir(event);
//     console.dir(input);
// });

one.addEventListener("click", function(){
    input.value += (input.value ? "" : "") + one.textContent;
});
two.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + two.textContent;
});
three.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + three.textContent;
});
add.addEventListener("click",function(e){
    
    let copy = input.value;
    input.value += (input.value ? "" : "") + add.textContent;
    // console.log(copy.length);
    // let newData = input.value;
    // console.log(newData);

    // let result = copy + newData;
    // input.value=result;

    // if (""==""){
    //     let copy = input.value;
    //     input.value="";

    // } 

    for (let i=0;i<copy.length;i++){
        if (input.value[i]==='1'){
            let copy1= input.value;
            console.log(copy1);
            input.value="";
            console.log("succesfully done");


        }else{
            // console.log("succesfully done 1");
        }
    }
});
four.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + four.textContent;
});
five.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + five.textContent;
});
six.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + six.textContent;
});
seven.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + seven.textContent;
});
eight.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + eight.textContent;
});
nine.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + nine.textContent;
});
zero.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + zero.textContent;
});
subtraction.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + subtraction.textContent;
});
multiplication.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + multiplication.textContent;
});
division.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + division.textContent;
});
perscentage.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + perscentage.textContent;
});
clear.addEventListener("click",function(){
    input.value="";
});
delet.addEventListener("click",function(){
    input.value="";
});
answer.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + answer.textContent;
});
dot.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + dot.textContent;
});
combine.addEventListener("click",function(){
    input.value += (input.value ? "" : "") + combine.textContent;
});