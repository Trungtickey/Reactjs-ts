let str: string="Ghiền Bóng Đá"
let arrn : number[]=[1,2,3,4,5]


const checka = (inp: string|number[]) =>{

    if ( typeof inp ==="string" ){
        return console.log(inp);
        
    } else if(Array.isArray(inp)){
        inp.forEach((out)=> console.log(out))
    }

}


checka(str)
checka(arrn)