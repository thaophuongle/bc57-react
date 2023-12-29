import React, { Component } from 'react'

export default class ProductForm extends Component {

    state = {
        values: {
            id: '',
            name: '',
            price: '',
            type: 'Laptop',
            description: '',
            img: ''
        },
        errors: {
            id: '',
            name: '',
            description: '',
            img: ''
        },
        isSubmit: false
    }




    handleChangeInput = (e) => {
        //Xử lý values
        let tag = e.target; //Lấy ra dom hiện tại đang gõ
        let dataType = e.target.getAttribute('data-type')
        // console.log(dataType)
        let newValues = { ...this.state.values }
        newValues[tag.id] = tag.value;
        //xử lý errors
        let newErrors = { ...this.state.errors }
        let messError = '';
        if (newValues[tag.id] === '') {
            messError = `${tag.id} cannot be blank !`
        } else {
            if (dataType) {
                switch (dataType) {
                    case 'number': {
                        let regexNumber = /^[0-9]{1,7}$/
                        if (!regexNumber.test(newValues[tag.id])) {
                            messError = `${tag.id} is invalid!`
                        }
                    }; break
                    // case 'email':{

                    // }
                    default: { }
                }
            }
        }

        newErrors[tag.id] = messError
        //Xử lý nút submit
        //Lỗi xác định khi nào? các giá trị trong error chỉ cần 1 trường có lỗi => lỗi, hoặc tất cả value '' thì lỗi
        let valid = true;
        for (let key in newErrors) {
            if (newErrors[key] !== '') {
                valid = false;
                break;
            }
        }
        for (let key in newValues) {
            if (newValues[key] === '') {
                valid = false;
                break;
            }
        }
        this.setState({
            values: newValues,
            errors: newErrors,
            isSubmit: valid
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //chặn reload page
        //Xử lý thêm dữ liệu vào table
        let { addProduct } = this.props;
        //Truyền state.values ra cho hàm addProduct ở component React Form
        addProduct(this.state.values);
    }
    //Cách 1: Can thiệp gán props vào state trước render của component dựa vào :static getDerivedStateFromProps
    // static getDerivedStateFromProps(newProps,currentState){
    //     //Can thiệp vào quá trình trước khi render (bấm nút edit ở cha) => lấy state product edit gán vào state.value
    //     console.log(newProps)
    //     console.log(currentState)
    //     if(newProps.productEdit.id !== currentState.values.id){
    //         //Hành động click nút chỉnh sửa
    //         currentState.values = {...newProps.productEdit}
    //     }
    //     //Trả ra state mới để hàm render lấy dữ liệu làm this.state
    //     return currentState
    // }
    //Cách 2: dùng componentWillReceiveProps can thiệp props đưa vào state trước render
    componentWillReceiveProps(newProps) {
        //state thay đổi thì componentWillReceiveProps không chạy
        this.setState({
            values:newProps.productEdit
        })
    }
    render() {
        // this.props
        console.log(this.state);
        //Chuyển dữ liệu về state của component
        let {id,name,price,img,type,description} = this.state.values;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>Product info</div>
                <div className='card-body'>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="id">ID:</label>
                                <input 
                                data-type="number" 
                                type="text" 
                                className="form-control" 
                                id="id" 
                                name="id" 
                                value={id}
                                onInput={this.handleChangeInput} />
                                <p className='text text-danger'>{this.state.errors.id}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" name="name" onInput={this.handleChangeInput} value={name} />
                                <p className='text text-danger'>{this.state.errors.name}</p>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Price:</label>
                                <input value={price} data-type="number" type="text" className="form-control" id="price" name="price" onInput={this.handleChangeInput} />
                                <p className='text text-danger'>{this.state.errors.price}</p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="img">Image URL:</label>
                                <input type="text" className="form-control" id="img" name="img" onInput={this.handleChangeInput} value={img}/>
                                <p className='text text-danger'>{this.state.errors.img}</p>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description:</label>
                                <textarea value={description} className="form-control" id="description" name="description" defaultValue={""} onInput={this.handleChangeInput} />
                                <p className='text text-danger'>{this.state.errors.description}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">Type:</label>
                                <select className="form-control" id="type" name="type" onInput={this.handleChangeInput} value={type}>
                                    <option value="laptop">Laptop</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button disabled={!this.state.isSubmit} type="submit" className="btn btn-primary">Submit</button>

                    <button disabled={!this.state.isSubmit} type='button' className='btn btn-success mx-2' onClick={()=>{
                        //Code chức năng cập nhật dữ liệu arrayProduct
                        this.props.updateProduct(this.state.values)
                    }}>Update</button>
                </div>
            </form>
        )
    }
}