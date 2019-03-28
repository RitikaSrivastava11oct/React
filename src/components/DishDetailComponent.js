// assignment w3 c2
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label, Row, Col,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Moment from 'moment';
import { Loading } from './LoadingComponent';
//to fetch the image from server
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false
        };
    }
   

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }


    handleSubmit(values) {
         this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
  
    render() {
        return(
        <div>
          <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
          <div className="container">

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                    <ModalBody>
                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                              <Row>
                                <Label htmlFor="rating" md={2}>Rating</Label>
                              </Row> 
                              <Row >
                                  <Col md={10}>
                                      <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                      </Control.select>
                                   </Col>
                              </Row> 
                              <Row >
                                <Col>
                                  <Label htmlFor="author" >Your Name</Label>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={10}>
                                     <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                          required, 
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                      />
                                      <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                              </Row>
                              <Row >
                                 <Label htmlFor="comment" md={2}>Comment</Label>
                              </Row>
                              <Row className="form-group">
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                              </Row>
                              <Row className="form-group">
                                <Col md={10}>
                                   <Button type="submit" color="primary" mt={2}>Submit</Button>
                                </Col>
                              </Row>
                            
                          </LocalForm>
                     </ModalBody>
             </Modal>
           </div>                 
        </div>  
         
        );
    } 
}      

function Rendercomments({comments, addComment, dishId}){
 if(comments!=null)
 {
  return (
    <div className="m-1">
      <ul className="list-unstyled">
        {comments.map((eachComment) => {
          return(
            <li>
              <blockquote>
                <p className="text-left">{eachComment.comment}</p>
                <p className="text-left">-- {eachComment.author},{Moment(eachComment.date).format('MMM DD,YYYY')}</p>
              </blockquote>
            </li>
          );
        })}
      </ul>
       <CommentForm dishId={dishId} addComment={addComment} />
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
      if (props.isLoading) {
        return(
          <div className="container">
            <div className="row">            
              <Loading />
            </div>
          </div>
        );
      }
      else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
      }
      else if (props.dish != null) 
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
               <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name} />
               <CardBody>
                  <CardTitle>{props.dish.name}</CardTitle>
                  <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
           </div>
          <div className="col-12  col-md-5 m-1">
            <h4>Comments</h4>
            <Rendercomments comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}/>
            

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