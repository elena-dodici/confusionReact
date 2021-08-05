import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DisdetailComponent';

class Menu extends Component {
    constructor(prop) {

        super(prop);

        this.state = {
          selectedDish:null
        }


    }



    onDishSelect(dish){

      this.setState({selectedDish:dish});


    }

    renderDish(dish){
      if(dish !=null){
        return(
          <Card className="col-12 col-md-5 m-1">
                   <CardImg width="100%"   src={dish.image} alt={dish.name} />
                   <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.label}</CardText>
                     <CardText>{dish.price}</CardText>
                   </CardBody>
               </Card>
           );
      }

    }

    render() {
// this.props.dishes  from the app




        const menu = this.props.dishes.map((dish) => {
          //set the rendering rules for each dish
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card
                  onClick={()=>this.onDishSelect(dish)}
                 >

                      <CardImg width="100%" src={dish.image} alt={dish.name} />

                  <CardImgOverlay>
                    <CardTitle >{dish.name}</CardTitle>


                  </CardImgOverlay>
                </Card>
              </div>
            );
        });


        return (
          //bootstrap
          <div className="container">
            <div className="row">

                  {menu}
            </div>

             <DishDetail selectDish={this.state.selectedDish}  />
          </div>
        );
    }


}

export default Menu;
