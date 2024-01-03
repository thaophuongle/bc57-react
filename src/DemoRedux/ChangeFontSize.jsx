//rcredux

/*
    Sau khi rcredux thi sẽ xoá 
    1/ export trên class
    2/ mapDispatchToProps dưới hàm mapStateToProps
    3/ xoá mapDispatchToProps trong connect
*/


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFontSizeAction } from '../redux/reducers/fontSizeReducer'

class ChangeFontSize extends Component {
  render() {
    let {fSizeState, dispatch} = this.props
    console.log(this.props)
    return (
      <div className='container'>
        <p style={{fontSize:fSizeState.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit voluptate! Repellendus in earum porro?</p>
        <button className="btn btn-primary" onClick={() => {
            //Tạo ra action được export từ file rxSlice
            const action = changeFontSizeAction(1)
            //Dispatch action lên reducer
            dispatch(action)
        }}>+</button>
        <button className="btn btn-primary mx-2" onClick={() => {
            //Tạo ra action được export từ file rxSlice
            const action = changeFontSizeAction(-1)
            //Dispatch action lên reducer
            dispatch(action)
        }}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    fSizeState: state.fSizeState
})


export default connect(mapStateToProps)(ChangeFontSize)