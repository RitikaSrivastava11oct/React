//redoing assignment 1
import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'moment';


function Rendercomments({comments}){
  if(comments!=null)
  {
    const comment = comments.map((eachComment) => {
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
            <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>                
          </div>


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
            <Rendercomments comments={props.comments}/>
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