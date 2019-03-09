//redoing assignment 1
import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import Moment from 'moment';


function Rendercomments({props}){
  if(props.dish!=null)
  {
    const comment = props.dish.comments.map((eachComment) => {
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
  
function DishDetail(props){
   if(props.dish!=null)
      {
        return(
        <div className="container">

          <div className="row">
           <div className="col-12  col-md-5 m-1">
            <Card>
               <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
               <CardBody>
                  <CardTitle>{props.dish.name}</CardTitle>
                  <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
           </div>
          <div className="col-12  col-md-5 m-1">
            <h4>Comments</h4>
            <Rendercomments props={props}/>
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

export default DishDetail;