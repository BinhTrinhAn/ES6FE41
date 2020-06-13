// console.log(number);

 number = 1;

// {
//     let number = 2 ;
//     console.log('log lan 1',number)
// }

// console.log('log lan 2',number);

// const : dung để khai báo hằng không thể thay đổi giá trị, nhưng có thể set giá trị thuộc tính mới cho hàm
// ex:

// const sinhVien = {
//     maSV : '001',
//     ten : 'Trinh An Binh',
// }

// const sinhVien = 2; // khong dung được

// Khai báo hàm ES5:

// let showMess = function(mess) {
//     console.log(mess)
// }

// // Khai báo hàm ES6 :
// let showMess = (mess) => {
//     console.log(mess)
// }

// // Đối với câu ES5 chỉ có 1 return

// let tinhTong = function(a,c,b) {
//     return (a+b+c)
// }

//ES6:

// let tinhTong = (a,b,c) => (a+b+c)

this.hoTen = "abc"
let sinhVien = {
    hoTen : 'Nguyen Van An',
    lop: 41,
    layThongTinSV: function() { 
        console.log(this);
               
        function hienThiThongTin () {
            console.log(this)
        }
        hienThiThongTin();
    }
}

sinhVien.layThongTinSV()
// const a = sinhVien.layThongTinSV;
// a()

// rest param giống kwage agument trong python truyền được nhiều tham số vào trong hàm

const a = [1,2,3]
const b = [0,...a,4] // append các phần từ ở a vào.
console.log(b)

// let infor = (ten = 'binh') => {
//     console.log(ten)
// }

// infor(teNam='Nam');

let A = [1,2]
let [n,m] = A // array destructing = list unpacking in python
console.log(n,m);
console.log(typeof(m))

let people = {
    name : 'Nam',
    age : 19
}

let {name,age} = people; // phai lấy tên cùng thuộc tính đối với object
console.log(name,age)