// class account {
//     constructor(name,password){
//         this.name = name;
//         this.password = password;
//     }
// }

// const users = [
//     new account('Trung', 'Tickey @123'),
//     new account('Liên cù', 'htmlien@gmail.com '),
//     new account('Thành', 'congthanh1.2.3!@gmail.com'),
// ];
// // Hàm kiếm tra mật khẩu có chứa dấu cách không
// let wrongAccount = users.find(Account => Account.password.includes(' '));
// if(wrongAccount) {
//     console.log('Tài khoản có mật khẩu không hợp lệ: ${wrongAccount.name}');
//     console.log('Vị trí trong mảng: ${users.indexOf(wrongAccount)}');
// } else {
//     console.log("Mọi tài khoản đều hợp lệ.");
//     users.forEach((Account,index) => {
//         console.log('Tài khoản ${index}: ${Account.name}');
//     });
// }
//Tạo một lớp để định nghĩa đối tượng tài khoản
class TaiKhoan {
    constructor(userName, password) {
      this.userName = userName;
      this.password = password;
    }
  }
  
  // Tạo một mảng các đối tượng tài khoản
  let mangTaiKhoan = [
    new TaiKhoan('Trung', 'Tickey@12 3'),
    new TaiKhoan('Liên cù', 'htmlien@28'),
    new TaiKhoan('Thành', 'congthanh@27'),
  ];
  
  // Sử dụng hàm find để tìm tài khoản có mật khẩu chứa dấu cách
  let taiKhoanKhongHopLe = mangTaiKhoan.find(taiKhoan => taiKhoan.password.includes(' '));
  
  if (taiKhoanKhongHopLe) {
    console.log(`Tài khoản có mật khẩu không hợp lệ: ${taiKhoanKhongHopLe.userName}`);
    console.log(`Vị trí trong mảng: ${mangTaiKhoan.indexOf(taiKhoanKhongHopLe)}`);
  } else {
    console.log('Mọi tài khoản đều hợp lệ.');
    mangTaiKhoan.forEach((taiKhoan, index) => {
      console.log(`Tài khoản ${index}: ${taiKhoan.userName}`);
    });
  }
  
