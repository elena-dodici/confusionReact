import React from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';


  // constructor(a){
  //   super(a);
  //   this.renderDish = this.renderDish.bind(this);
  //   this.renderComments = this.renderComments.bind(this);
  //   this.formateDate = this.formateDate.bind(this);
  //console.log(this.props)
  // }




  function RenderDish({dish}){
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


  function FormateDate({date}){
    const options = { year: "numeric", month: "short", day: "numeric" };
    return  new Date(date).toLocaleDateString('en-US',options);
  }


  function RenderComments({dish}){
      if(dish!=null){
         return(
              dish.comments.map((com)=>
                <ul key={com.id} className="list-unstyled">
                  <li >{com.comment}
                  </li>
                  <li>
                    -- {com.author}{" "}<FormateDate date={com.date}/>
                  </li>
                </ul>
              )
          )
      }
  }




 const DishDetail =(props)=>{

        if(props.dish!=null){
          return (
            <div className = 'container'>
                <div className= 'row '>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                        <RenderComments dish={props.dish}/>
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




export default DishDetail;
