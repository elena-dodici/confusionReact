import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderMenuItem({dish,onClick}){
        return(
          <Card
            onClick={()=> onClick(dish.id)}
           >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        )
      }
    // constructor(prop) {
    //
    //     super(prop);
    //
    //     this.state = {
    //       selectedDish:null
    //     }
    //
    //
    // }




    // renderDish(dish){
    //   if(dish !=null){
    //     return(
    //       <Card className="col-12 col-md-5 m-1">
    //                <CardImg width="100%"   src={dish.image} alt={dish.name} />
    //                <CardBody>
    //                  <CardTitle>{dish.name}</CardTitle>
    //                  <CardText>{dish.label}</CardText>
    //                  <CardText>{dish.price}</CardText>
    //                </CardBody>
    //            </Card>
    //        );
    //   }
    //
    // }


// this.props.dishes  from the app
      //  console.log('Menu component render is invoked')
    const Menu =(props)=>{
        const menu =props.dishes.map((dish) => {
          //set the rendering rules for each dish
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
              </div>
            );
        });


        return (
          //bootstrap
          <div className="container">
            <div className="row">
                  {menu}
            </div>
          </div>
        );

    }



export default Menu;
