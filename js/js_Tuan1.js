let gioiThieu = () => {
    const hoTen = 'Nguyễn Văn An'
    let tuoi = 22
    let canNang = 68
    let chieuCao = 1.75
    let laSinhVien = true
    let formGioiThieu = `
====== HỒ SƠ CÁ NHÂN ======
Họ tên: ${hoTen}
Tuổi: ${tuoi} tuổi
Cân nặng: ${canNang} kg
Chiều cao: ${chieuCao} m
Sinh Viên: ${laSinhVien ? "Có" : "Không"}`
    console.log("🧡", formGioiThieu);
}
gioiThieu();
console.log("===============================================================");

let caculatorBMI = () => {
    let canNang = 57
    let chieuCao = 1.67
    let bmi = canNang / (chieuCao ** 2) //công thức tính BMI

    //phân loại

    let phanLoai = bmi < 18.5 ? "Thiếu cân" :
        bmi < 25 ? "Bình thường" :
            bmi < 30 ? "Thừa cân"
                : "Béo phì"
    console.log(`Cân nặng của bạn là ${canNang} kg và chiều cao của bạn là ${chieuCao}m
        => Chỉ số BMI của bạn là ${bmi.toFixed(1)}.  Kết quả chuẩn đoán: ${phanLoai}`);
}

caculatorBMI();
console.log("===============================================================");

let chuyenDoiDV =() => {
    let km = 5
    let met = km * 1000
    let dam = (km * 0.621371).toFixed(1)
    console.log(`${km} km = ${met} mét = ${dam} mile`);
    
    let h = 3 ;
    let phut = h * 60
    let giay =  phut *60
    console.log(`${h} giờ = ${phut} phút = ${giay} giây`);
}

chuyenDoiDV();
console.log("===============================================================");

let hoaDonThue = () => {
    let giaSanpham = 100000
    let soLuong = 10
    let thueSuat = 0.1
    
    let tamTinh = giaSanpham * soLuong
    let tienThue = tamTinh * thueSuat
    let tongTien = tamTinh + tienThue

    console.log(`Tạm tính: ${tamTinh.toLocaleString()}đ
    Tiền thuế 10%: ${tienThue.toLocaleString()}đ
    Tổng cộng: ${tongTien.toLocaleString()}đ`);
}

hoaDonThue();
console.log("===============================================================");

let hoaDonGiamGia = () => {
    let gia = 500000
    let phanTramGiam = 20
    let tienGiam = gia * phanTramGiam / 100
    let conLai = gia - tienGiam
    
    console.log(`Bill gốc: ${gia.toLocaleString()}đ
    Số tiền giảm 20%: ${tienGiam.toLocaleString()}đ
    Tổng Bill: ${conLai.toLocaleString()}đ`);
}

hoaDonGiamGia();
console.log("===============================================================");

let chuyenDoiNhietDo = () => {
    let doC = 37
    let doF = doC * 9/5 + 32
    console.log(`${doC}*C = ${doF}*F`);

    let f = 100
    let c = f - 32 * 5/9;
    console.log(`${f}*F = ${c.toFixed(1)}*C`);    
}
chuyenDoiNhietDo();


