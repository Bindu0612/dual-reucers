import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component{

  render(){
    return(
      <>
     {this.props.a.student.map((item)=>{
       return(<li> {item.name}</li>)
     })}  <hr/>
      <button onClick = {this.props.showStudentData} > Click Me For Employee Data </button>        
      </>
    )
  }
}

function mapStateToProps (state){
  console.log(state.student);
  return {a:state}
}

function mapDispatchToProps (dispatch){
  return{
    showEmpData : () => dispatch ({type:'EMPDATA'}),
    showStudentData : () => dispatch ({type:'STUDDATA'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);