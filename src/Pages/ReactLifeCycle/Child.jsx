import React, { Component, PureComponent } from 'react'

/*
    PureComponent giống hệt component tuy nhiên không lifecycle shouldComponentUpdate vì pure sẽ xử lý ngầm để nhận dạng props component có thay đổi hay không.
    Lưu ý: Nhận biết sự thay đổi props trên primitive value(boolen,string,number,undefined,null)
    Nếu props là reference value (object, array) thì khi handle setState ở component cha thì nhớ clone ra {...} hoặc [...] hoặc dùng cloneDeep của lodash

*/

export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return null
    }

    // shouldComponentUpdate(newProps,newState) {
    //     //Can thiệp vào shold update để biết là bấm nút number thì không render lại, còn bấm nút like phải render lại
    //     //newProps: là props sau khi thay đổi trước khi render
    //     //newState: là state sau khi thay đổi trước khi render
    //     if(newProps.like !== this.props.like){
    //         return true
    //     }
    //     console.log('shouldComponentUpdate child')
    //     return false;
    // }


    render() {
        console.log('render child')
        return (
            <div className='p-5 bg-dark text-white text-center'>
                Like : {this.props.likeObject.like}
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child')
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate child')
    }

}