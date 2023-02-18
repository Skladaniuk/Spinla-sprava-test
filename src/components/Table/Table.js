import React, { useState, useEffect } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useSelector, useDispatch } from 'react-redux';
import * as listOperation from '../../redux/list/listOperation';
import { Button, MainTable, TableHead, TableBody } from './Table.styled';
import { Box } from '../Box';





export const Table = () => {
  const dispatch = useDispatch();

  const listState = useSelector(state => state.list);
  const userList = useSelector(state => state.list.entities);
  const selectedFields = useSelector(state => state.list.activeFields);

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    dispatch(listOperation.fetchList());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  if (listState.isLoading) {
    return (
      <div>
        <p>LOADING</p>
      </div>
    );
  }

  if (listState.error) {
    return (
      <div>
        <p>{JSON.stringify(listState.error)}</p>
      </div>
    );
  }

  return (
    <Box padding="24px" backgroundColor = "#202126" width='100vw' height='100vh'>
      <Button onClick={toggleModal}>
        Select Columns!
      </Button>
      <MainTable>
        <thead>
          <tr>
            {selectedFields.name && <TableHead>Name</TableHead>}
            {selectedFields.username && <TableHead>Username</TableHead>}
            {selectedFields.number && <TableHead>Number</TableHead>}
            {selectedFields.company && <TableHead>Company</TableHead>}
            {selectedFields.email && <TableHead>Email</TableHead>}
            {selectedFields.website && <TableHead>Website</TableHead>}
            {selectedFields.adress && <TableHead>Adress</TableHead>}
            {selectedFields.id && <TableHead>ID</TableHead>}
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map(item => (
              <tr key={item.id}>
                {selectedFields.name && <TableBody>{item.name}</TableBody>}
                {selectedFields.username && <TableBody>{item.username}</TableBody>}
                {selectedFields.number && <TableBody>{item.number}</TableBody>}
                {selectedFields.company && <TableBody>{item.company}</TableBody>}
                {selectedFields.email && <TableBody>{item.email}</TableBody>}
                {selectedFields.website && <TableBody>{item.website}</TableBody>}
                {selectedFields.adress && <TableBody>{item.adress}</TableBody>}
                {selectedFields.id && <TableBody>{item.id}</TableBody>}
              </tr>
            ))}
        </tbody>
      </MainTable>
      <ModalWindow
        fields={selectedFields}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </Box>
  );
};
