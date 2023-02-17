import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {nanoid} from 'nanoid';
import { Filter } from './Filter';



export const ModalWindow = ({fields}) => {
  const [show, setShow] = useState(false);
  const [columns, setColumns] = useState(fields);
  console.log(columns)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  




  let arr1 = [];
  let arr2 = [];
 
  const funA = () => {
    for (const key in fields){
     if(fields[key]){
        arr1.push(key)
     }
     else{
      arr2.push(key)
     }
    }
  }

  funA()


 
 


    return(<>
     <Button variant="primary" onClick={handleShow}>
        Select Columns
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Filter/>
        </Modal.Header>
        <Modal.Body>
          
        <h2>Available Columns</h2>
        <ul>
          {arr1.map(item => (<li key = {nanoid()}>{item}</li>))}
        </ul>
        <h2>Selected Columns</h2>
        <ul>
          {arr2.map(item => (<li key = {nanoid()}>{item}</li>))}
        </ul>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
           Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}