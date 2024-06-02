let check = (any: any) => {
    if (typeof any === "number") {
      return console.log("số");
    } else if (Array.isArray(any)) {
      return console.log("mảng");
    } else if (typeof any === "object") {
      return console.log("object");
    } else {
      return console.log("no");
    }
  };
  
  let arrN: number = 10;
  let arr: number[] = [10, 1, 1, 2];
  let arrO: any = { id: 10, name: "Tickey" };
  check(arrN);
  check(arr);
  check(arrO);