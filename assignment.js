//https://github.com/CodeAnik12/Assignment3


function InchToFeet(inch){
    var feet = inch / 12;
    return feet ;
}
var feet = InchToFeet(1120);
console.log(feet);

var name ='Anik Das';
console.log(name.length);








function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var meter = kilometerToMeter(12);
console.log(meter);









function budgetCalculator(product1 , product2, product3){
    var watch = product1 * 50;
    var mobile = product2 * 100;
    var laptop = product3 * 500;
    var price = watch + mobile + laptop;
    return price;
}

var total = budgetCalculator(6, 4, 2)
console.log(total);










function megaFriend(mega_name){
    var long_string = mega_name[0].length;
    var output = mega_name[0];
    for(var i= 1; i < mega_name.length; i++){
        var name = mega_name[i].length;
        if(name > long_string){
            output = arra[i];
            long_string = name ;
        }
    }
    return output;
}
console.log(megaFriend(["Mashrafi", "Tamim", "Sakib", "Soumaya", "Liton", "Mushi", "Mithun", "Rubel", "fiz", "Taskin"]));