//import logo from './logo.svg';
//import '../App.css';



//That App function is a valid React component.

//import {Navbar} from 'bootstrap';
import { Navbar ,NavbarBrand} from 'reactstrap';
import React, { Component } from 'react';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponents';
import DishDetail from './DisdetailComponent';


class Main extends Component {
//store the state

  constructor(props){
//initialize the state so in render could use state
    super(props);
//DISHES becomed the part of component
    this.state={
     dishesInApp:DISHES,
   // colorTable: {},
     selectedDish:null

    }
    // for( var item in this.state.dishesInApp){
    //     let dish = this.state.dishesInApp[item]
    //     this.state.colorTable[dish.id] ='blue'
    // }
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }


 // onDissmiss(id){
 //
 //   function isNotId(item){
 //      return  item.id !== id;
 //   }
 //
 //   const updatedList = this.state.dishesInApp.filter (isNotId);
 //   this.setState({dishesInApp:updatedList});
 // }

 // selectDish(dish){
 //
 //   this.setState({selectDish:dish});
 //
 //   var color = this.state.colorTable[dish.id];
 //
 //   if(color==='red'){
 //     //this.setState({colorTable:this.state.colorTable.map((color,id)=>id=='red'? color:{...color,id:'blue'}) })
 //     this.state.colorTable[dish.id]='blue';
 //   }
 //   else{
 //     this.state.colorTable[dish.id]='red';
 //   }
 //
 //   }



  render() {


  //   const dish =  this.state.dishesInApp.map( (item)=>{
  //       return (
  //             <div key={item.id}>
  //                 <p style={{color:this.state.colorTable[item.id]}}>{item.price}</p>
  //                 <p>{this.state.colorTable[item.id]}</p>
  //                 <p>{item.category}</p>
  //                 <span>
  //                   <button
  //                    // This syntax ensures `this` is bound within handleClick
  //                    //arrow function can do the bind automatically
  //                    onClick={() => this.onDissmiss(item.id)}
  //                     type="button"
  //                   >
  //                   Dissmiss
  //                   </button>
  //                 </span>
  //                   <div>
  //                    <button
  //                    onClick={() => this.selectDish(item)}
  //                    type="button"
  //                    >
  //                    ChangeColor
  //                    </button>
  //                   </div>
  //                </div>
  //       )
  //
  //
  // });




    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
       <Menu dishes={this.state.dishesInApp} onClick={(id)=> this.onDishSelect(id)}/>
       <DishDetail dish={this.state.dishesInApp.filter((dish) => dish.id === this.state.selectedDish)[0]} />
       <p>{console.log(this.state.selectedDish)}</p>
      </div>
      );
   }
}


export default Main;
