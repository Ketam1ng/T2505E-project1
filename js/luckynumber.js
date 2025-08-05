const luckyNumber = parseInt(Math.random() * 100);
console.log(luckyNumber);

var dudoan = prompt("🎲 Nhập số bạn dự đoán (từ 0 đến 99):");

var tiencuoc = prompt("💰 Nhập số tiền bạn muốn đầu tư (VND):");

dudoan = parseInt(dudoan);
tiencuoc = parseInt(tiencuoc);

if(dudoan === luckyNumber){
    var win = tiencuoc * 70;
    alert("Xin chúc mừng bạn đoán trúng số " + luckyNumber + " số tài sản bạn được nhận "+ win + " Đô La Chưởng");
}else{
    alert("Thắng bại tại Wifi, gấp thếp đi bạn ơi ...");
}
