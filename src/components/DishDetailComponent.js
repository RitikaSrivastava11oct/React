import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
class DishDetail extends Component{

	constructor(props){
		super(props);
	}
	/* to show the details of the the dish which is selected*/
	 renderDish(dish)
    {
      if(dish!=null)
      {
        return(
            <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          );
      }
      else
      {
        return(
          <div></div>
        );
      }
    }

    
	
	render()
	{
		return(
		<div className="row">
			<div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.selectedDish)}
            </div>
            <div className="col-12 col-md-5">
            	
      		if((this.props.selectedDish))!=null)
    		{
    		
    		 	(this.props.selectedDish).comments.map((comment) => {
            	return (
            	<div>{comment}</div>
            	);
        		});
        	
    		}
    		else
    		{
			return(
          		<div>
          		</div>
        	);
    		}
            </div>
        </div>
		);
	}
}
export default DishDetail;