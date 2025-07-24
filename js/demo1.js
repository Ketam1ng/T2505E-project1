// ko quan tâm kiểu dữ liệu
// null number string boolean array function
var x = 10;
x = "uhsdfhsf";

var a = 10;
var b = "20";
var c = 'jafdf';

// n là sô s là chuỗi
// n + n = n
// n + s = s
// s + s = s
console.log(a+a);//20
console.log(a+b);//1020
console.log(b+a);//2010
console.log(b+c);//20jafdf
var t = false;

if(a>5){
    console.log("A");
}else if(a >=10){
    console.log("B");
}else if(a > 15){
    console.log("C");
}else{
    console.log("D");
}

for(var i=0;i<10;i++){
    console.log("i="+i);
}

var arr = [];// đây là 1 array
// arr[0] = 9;
// arr[5] = 12;
// arr[2] = 96;
arr.push(9);// 0
arr.push(12);// 1
arr.push(96);// 2
// arr.push("Hello");
// arr.push(true);
// arr.push([1,2,3,4,5]);
for(var i=0;i< arr.length;i++){
    console.log(arr[i]);
}
//duyệt mảng -- map
arr.map(e=>{
    console.log(e);
});

arr.map((e,i)=>{
    console.log(e);
});
// sắp xếp lại mảng
arr.sort();
// tìm kiếm
arr.includes(9); // true / false
if(arr.includes(9)){

}
//
var pi = "3.14159";
pi = parseFloat(pi); //chuyển thành số
pi = parseInt(pi);

function tinh_tong(a,b){
    var c = a+b;
    return c;
}
tinh_tong(5,4);
const phep_tru = function(a,b){
    var c = a-b;
    return c;
}
phep_tru(5,2);
const phep_nhan = (a,b)=>{
    var c = a * b;
    console.log(c);
}
phep_nhan(7,3);

//một số hàm hay dùng
// alert("Bạn chưa đủ 18 tuổi truy cập website"); //return void - không làm gì cả chỉ để chạy
// confirm("Có thật là đủ tuổi chưa vạch ra xem nào"); //return boolean
// if(confirm("Có thật là đủ tuổi chưa vạch ra xem nào =))")){
//     var s = prompt("Vui lòng nhập tên của bạn:"); //return string
//     var s = prompt("Bạn bao nhiêu tuổi?"); //string
//     alert("Xin chào "+s);
// }else{
//     alert("Tắt máy đi ngủ ngay tao gọi mẹ mày giờ");
// }

//
var r = Math.random(); //return number -> double/float 0->1 vd: 0.12723
r = r * 100; // 12.34765
r = parseInt(r); // 12
// LUCKY NUMBER
// tạo một số ngẫu nhiên từ 0->99 (<100)
// cho người chơi nhập số dự đoán của mình
// và nhập số tiền muốn đầu tư -> lợi nhuận x70
// đối chiếu và thông báo kết quả trúng thưởng hay không