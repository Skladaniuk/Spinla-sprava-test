import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';
import { Button, Modal, ListContainer, Container, Title, List, Item, ListButton, ItemContainer, Backdrop } from './ModalWindow.styled';
import { Filter } from '../Filter/Filter';
import { selectField as selectFieldInStore } from '../../redux/list/listReducer';






export const ModalWindow = ({ fields, isModalVisible, toggleModal }) => {
  
  
  
  
  
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [activeFields, setActiveFields] = useState([]);
  const [inactiveFields, setInactiveFields] = useState([]);
  const selectedFields = useSelector(state => state.list.activeFields);

  
  
  
  
  useEffect(() => {
    let active = [];
    let inactive = [];
    for (const key in selectedFields) {
      if (selectedFields[key]) {
        active.push(key);
      } else {
        inactive.push(key);
      }
    }

    setActiveFields(active);
    setInactiveFields(inactive);
   
  }, [selectedFields]);


  

  const buildChangeFieldValueFunc = value => {
    return fieldName => dispatch(selectFieldInStore({ fieldName, value }));
  };

  let dragged = null;

  const handleDragStart = e => {
    e.dataTransfer.setData("text/plain", "text");
    e.dataTransfer.dropEffect = "move";
    dragged = e.currentTarget;
    e.stopPropagation();
  }



  const handleDrop = (e) => {
    e.preventDefault();
    const field = dragged.innerHTML;
    dragged.draggable = false;
     selectField(field);
    setActiveFields(arr => [...arr, field]);
    e.stopPropagation();
    
  }


  const handleDragOver = (e) => {
    console.log("Over");
    e.stopPropagation();
    e.preventDefault();
  }

  const unselectField = buildChangeFieldValueFunc(false);
  const selectField = buildChangeFieldValueFunc(true);


  const filterActiveFieldByText = (array, text) => {
    if (
      array &&
      Array.isArray(array) &&
      typeof text === 'string' &&
      array.length > 0 &&
      text.length > 0
    ) {
      return array.filter(el => el.trim().includes(text));
    }

    return inactiveFields;
  };

  return (
    <>
      {isModalVisible && (
        <Backdrop>
          <Modal>
          <Filter setSearchText={setSearchText} />
          <Container>
            <ListContainer>
              <Title>Available Columns</Title>
              <List>
                {filterActiveFieldByText(inactiveFields, searchText).map(field => (
                  <ItemContainer  key={field}>
                    <Item draggable
                      onDragStart={handleDragStart}
                       key={field}>{field}
                   </Item>
                  </ItemContainer>
                ))}
              </List>
            </ListContainer>
            <ListContainer onDragOver={handleDragOver} onDrop={handleDrop} className="active">
              <Title>Selected Columns</Title>
              <List>
                {activeFields.map(field => (
                  <ItemContainer  key={field}>
                    <Item key={field}>{field}
                      <ListButton onClick={() => unselectField(field)}>
                        <CgClose style={{ color: "white" }} />
                      </ListButton>
                    </Item>
                  </ItemContainer>
                ))}
              </List>
            </ListContainer>
          </Container>
          <Button onClick={toggleModal}>Apply</Button>
          </Modal>
        </Backdrop>
        )}
    </>
  );
};