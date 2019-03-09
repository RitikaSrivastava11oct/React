//redoing assignment 1
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import Moment from 'moment';

class DishDetail extends Component{
  constructor(props){
    super(props);
   
}
rendercomments(){
 
  
   if(this.props.dish!=null)
   {
   const comment = this.props.dish.comments.map((eachComment) => {

    return (
      <ul className="list-unstyled">
      <li>
      <blockquote>
               <p className="text-left">{eachComment.comment}</p>
              <p className="text-left">-- {eachComment.author},{Moment(eachComment.date).format('MMM DD,YYYY')}</p>

      </blockquote>
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
   
      if(this.props.dish!=null)
      {
        return(
        <div className="container">

          <div className="row">
           <div className="col-12  col-md-5 m-1">
            <Card>
               <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
               <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
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