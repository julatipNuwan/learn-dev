//แบบที่ 1 
// function sayWelcome(){
//     console.log("Welcome จ้า");
// }

// sayWelcome();
// sayWelcome();
// sayWelcome();
// sayWelcome();

//แบบที่ 2 
// function sayWelcome(customerName){
//     console.log("Welcome " + customerName);
// }
// sayWelcome("Air");
// sayWelcome("Aa");
// sayWelcome("Ann");
// sayWelcome("Biew");

//แบบที่ 3 
function welcome(welcomeMeassge){
    console.log("welcome" +" "+ welcomeMeassge);
}
welcome(": Biew");
welcome(": Ann");


function sayWelcome(customerName){
    console.log("เครื่องดื่ม คุณ" +" " + customerName +" "+ "ได้แล้วค่ะ");
    document.getElementById("display").innerHTML ="เครื่องดื่ม คุณ" +" " + customerName +" "+ "ได้แล้วค่ะ";
}
sayWelcome("Biew");
sayWelcome("Ann");

