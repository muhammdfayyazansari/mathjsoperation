// function show(){
// var aver = document.querySelector("#ave").value;    
// var showAve = document.querySelector("#showave");
// var findAve = math.median(Number(aver)).toString();
// console.log(findAve) 
// console.log(aver) 
// console.log(typeof aver)  
// }



let log2 = ()=>{
    let input = +document.querySelector("#log").value;
    let show = document.querySelector('#resultLog');
    let findLog = math.log2(input);
    
    show.innerHTML = "log<sub>2</sub> of "+input+' is '+ findLog;
}

let simplify = ()=>{
    let input = document.querySelector("#doSimplify").value;
    let show = document.querySelector('#resultSimplify');
    let findSimplify = math.simplify(input).toString();
    console.log(findSimplify)
    show.innerHTML = "Simplify of "+input+' is ===== '+ findSimplify;
}



let squareRoot = ()=>{
    let input = +document.querySelector("#square").value;
    let show = document.querySelector('#resultSquare');
    let findSquare = math.square(input);
    console.log(findSimplify)
    show.innerHTML = "Simplify of "+input+' is ===== '+ findSquare;
}



