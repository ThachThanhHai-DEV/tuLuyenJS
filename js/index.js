let ten = 'Thanh Hai'
let tuoi = 25
console.log("🧡 Tên: ", ten," Tuổi: ",tuoi);

const oInputTen = document.getElementById("tenNguoiDung");
const oInputTuoi = document.getElementById("tuoiNguoiDung");
const nutHienThi = document.getElementById("btnHienThi");
const khungHienThi = document.getElementById("khungHienThi");


function xuLyHienThi() {

    let tenXong = oInputTen.value;
    let tuoiXong = oInputTuoi.value;

    if(tenXong === "" || tuoiXong === "") {
        khungHienThi.innerHTML = "Nhập bài tập đầy đủ đi mày ơi!";
        khungHienThi.classList.remove("d-none");
        return;
    }

    khungHienThi.innerHTML = `Chào mừng ${tenXong}, <br> Tuổi: ${tuoiXong}`;
    khungHienThi.classList.remove("d-none");
}


nutHienThi.addEventListener("click", xuLyHienThi);

ten = 'THANH Hai'
tuoi = 25 
let Nam = true 
console.log("🧡 Gender ", typeof(Nam));

let a = 10, b = 8;
console.log("🧡 a+b = ", a+b);
console.log("🧡 a-b = ", a-b)
console.log("🧡 a*b = ", a*b);
console.log("🧡 a/b = ", Math.floor(a/b));
console.log("🧡 a%b = ", a%b);

let r = 5;
console.log('🧡 Chu vi = '  + Math.round(2*Math.PI*r) +' Diện tích là '+ Math.round(Math.PI*r**2))

//Xử lí chuỗi cơ bản
console.log("====== Dễ ======")

console.log(`Xin Chào, tôi tên ${ten}, ${tuoi} tuổi`);

console.log("====== Trung Bình ======")

let s = "  Nguyễn Văn An  "
console.log(`🧡 String S is => ${s}`);
console.log(`🧡 s.length()`,s.length);
console.log(`🧡 s.trim()`,s.trim());
console.log(`🧡 s.toUpperCase()`,s.toUpperCase());
console.log(`🧡 s.toLowerCase()`,s.toLowerCase());
console.log(`🧡 s.replace('Nguyễn', 'Thạch')`,s.replace('Nguyễn', 'Thạch'));
console.log("🧡 s.includes('văn')",s.includes("văn"));
console.log("🧡 s.includes('Văn')",s.includes("Văn"));
console.log("🧡 s.indexOf('Văn')",s.indexOf("Văn"));
console.log("🧡 s.trim().slice(0, 6)", s.trim().slice(0, 6))
console.log("🧡 s.trim().slice(0)", s.trim().slice(0))
console.log("🧡 s.trim().slice(1)", s.trim().slice(1))
console.log("🧡 s.trim().slice(2)", s.trim().slice(2))
console.log("🧡 s.trim().slice(3)", s.trim().slice(3))
console.log("🧡 s.trim().slice(4)", s.trim().slice(4))
console.log("🧡 s.trim().slice(5)", s.trim().slice(5))
console.log("🧡 s.trim().slice(6)", s.trim().slice(6))
console.log("🧡 s.trim().slice(-6)", s.trim().slice(-6))
console.log("🧡 s.[0]", s[0])
console.log("🧡 s.[1]", s[1])
console.log("🧡 s.[2]", s[2])
console.log("🧡 s.[3]", s[3])
console.log("🧡 s.[4]", s[4])
console.log("🧡 s.[5]", s[5])
console.log("🧡 s.[6]", s[6])

console.log("====== Thử Thách ======")

let email = 'thachthanhhai2002@gmailcom'
console.log(`🧡 Email vừa nhập => ${email}`);
console.log("Kiểm tra email => ", email.includes('@'&&".") ? "Email hợp lệ" : "Email không hợp lệ")
console.log("🧡 tên trước @ ",email.slice(0,email.indexOf('@')));
console.log("🧡 tên sau @ ",email.slice(email.indexOf('@')+1));

//CHUYỂN ĐỔI KIỂU DỮ LIỆU V2//
let s_v2 ="42"
console.log("🧡 Gía trị s_v2 =>", s_v2);
console.log("🧡 Number(s_v2) + 8 => ", Number(s_v2)+8);
console.log("🧡 parseInt(s_v2) + 8 => ", parseInt(s_v2)+8);
console.log("🧡 +s_v2 +8 ", +s_v2 +8 );

 (Number.isNaN(Number('3.14'))) ? console.log("🧡Number('3.14') NaN") : console.log("🧡Number('3.14') not NaN");
 (Number.isNaN(parseInt('3.14'))) ? console.log("🧡parseInt('3.14') NaN") : console.log("🧡parseInt('3.14') not NaN");
 (Number.isNaN(Number('42px'))) ? console.log("🧡Number('42px') NaN") : console.log("🧡Number('42px') not NaN");
 (Number.isNaN(parseInt('42px'))) ? console.log("🧡parseInt('42px') NaN") : console.log("🧡parseInt('42px') not NaN");
 (Number.isNaN(Number('abc'))) ? console.log("🧡Number('abc') NaN") : console.log("Number('abc') not NaN");

 let gia ='150000'
 let soLuong ='abc'

 if (Number.isNaN(Number(soLuong))) {
    console.log("Vui lòng nhập đúng số lượng");
 } else {
    console.log("Tổng tiền là ", (gia*soLuong).toFixed());

 }