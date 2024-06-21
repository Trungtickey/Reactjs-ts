import React, {Component} from 'react'

export default class Parents extends Component <{name:string},{data:number}>{
    // LIFECYCLE cho phép tác động vào từng giai đoạn của vòng đời component
    // Giai đoạn 1: Khởi tạo (khai báo propstype và statetype + constructor)
    constructor (props : {name : string}){
        console.log("Khởi tạo đối tượng từ lớp Parents");
        super(props); // gọi đến constructor của lớp cha
        this.state={
            data : 0
        }
    }
    // componentwillmount : chạy trước render
    componentWillMount():void {
        console.log("Trước khi component được mount");
    }
    componentDidMount():void{
        console.log("Sau khi component được mount");
    }

    // componentwillReceiveProps : chạy trước khi update
    componentWillReceiveProps(nextProps: Readonly<{name : string}>, nextContext: any): void{
        console.log("component sẽ được cập nhật");
        console.log("props cũ:", this.props);
        console.log("props mới:", nextProps);
    }
    shouldComponentUpdate(nextProps: Readonly<{name : string}>, nextState: Readonly<{data: string}>): void{
        // Sử dụng các logic để quyết định component có được render hay không
        return this.props.name !== nextProps.name
    }
    
}