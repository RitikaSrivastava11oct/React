//redoing assignment 1
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);
   
}
rendercomments(){
 
  
   if(this.props.selectedDish!=null)
   {
   const comment = this.props.selectedDish.comments.map((eachComment) => {
    return (
      <ul className="list-unstyled">
      <li>
         <p className="text-left">{eachComment.comment}</p>
         <p className="text-left">-- {eachComment.author} , {eachComment.date.format(date)} </p>
      </li>
      </ul>
        );
   });

 return (
          
            <div>
                  {comment}
            </div>
            );
}

else
{
    return(
      <div></div>  
    );
}
  
}
  render(){
   
      if(this.props.selectedDish!=null)
      {
        return(
        <div className="container">

          <div className="row">
           <div className="col-12  col-md-5 m-1">
            <Card>
               <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
               <CardBody>
                  <CardTitle>{this.props.selectedDish.name}</CardTitle>
                  <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
           </div>
          <div className="col-12  col-md-5 m-1">
            <h4>Comments</h4>
            {this.rendercomments()}
          </div>
         </div>
        </div>
          );
      }
      else
      {
        return(
          <div></div>
        );
      }

     
  }
}
export default DishDetail;