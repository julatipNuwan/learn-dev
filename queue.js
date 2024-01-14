
//โจทย์ที่1---> เรียกลูกค้า คิวที่ 230 เชิญที่ช่องบริการหมายเลข 3 ค่ะ
// แบบที่ 1
// function queue(queueNumber){
//     console.log("คิวที่ " + queueNumber + " เชิญที่ช่องบริการหมายเลข 3 ค่ะ");
// }
// queue(230);

//แบบที่ 2
// function queue(queueNumber, counter){
//     console.log("คิวที่ " + queueNumber + " เชิญที่ช่องบริการหมายเลข " + counter);
// }
// queue(230,3);

//โจทย์ที่ 2 ---> ถ้าลูกค้า 1-4 ท่าน รับคิว A  ---> ถ้ามากกว่า 5 ท่าน รับคิว B
function Customer(amountCustomer , queueCode){
    console.log("ลูกค้าจำนวน "+ + amountCustomer +" ท่าน รับคิว " + queueCode);
}
Customer(3, 'A');
Customer(5, 'B');
Customer(8, 'B');
Customer(1, 'A');