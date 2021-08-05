import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(a){
    super(a);

    this.renderDish = this.renderDish.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.formateDate = this.formateDate.bind(this);


  }



  renderDish(dish){

    if(dish !=null){
      return(
        <Card >
                 <CardImg width="100%"   src={dish.image} alt={dish.name} />
                 <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>

                 </CardBody>
             </Card>
         );
    }
    else{
      return(
        <div></div>
      )
    }
  }


formateDate(date){
  const options = { year: "numeric", month: "short", day: "numeric" };
  return  new Date(date).toLocaleDateString('en-US',options);


}

renderComments(dish){

    if(dish!=null){

        return(
            dish.comments.map((com)=>
              <ul key={com.id} className="list-unstyled">
                <li >{com.comment}
                </li>
                <li>
                  -- {com.author}{" "}{this.formateDate(com.date)}
                </li>
              </ul>
            )
        )

    }

}


    render() {
 //console.log('render is invoked');
      if(this.props.selectDish!=null){
        return (
          <div className = 'container'>
              <div className= 'row '>
                  <div className="col-12 col-md-5 m-1">
                      {this.renderDish(this.props.selectDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                      {this.renderComments(this.props.selectDish)}
                  </div>
               </div>
          </div>

      );
    }

    else{
      return(
        <div></div>
      )
    }
  }
}

export default DishDetail;
