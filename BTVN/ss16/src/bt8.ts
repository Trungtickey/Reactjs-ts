let oj1 = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
    },
  };
  let oj2 = {
    a: 5,
    b: {
      c: 6,
      d: [7, 8],
      e: {
        f: 9,
      },
    },
    g: 10,
  };

const assignObject = <T extends Object> (oj1 : T, oj2 : T)=>{
    // return {...o1, ...o2} C1
    return Object.assign(oj1,oj2);
};
console.log(assignObject(oj1,oj2)); // Hiện thị kết quả trong console