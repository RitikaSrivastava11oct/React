import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label, Row, Col,} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
		

export default CommentForm;