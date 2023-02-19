import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';

import { Table } from '../Table/Table';
import { Box } from '../Box/Box.styled';
import { ModalButton } from '../Button/Button';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { fetchUserList } from '../../store/userlist/fetchUserList';

export const Main = () => {
  const dispatch = useDispatch();

  const listState = useSelector(state => state.userList);
  const selectedFields = useSelector(state => state.userList.activeFields);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  if (listState.isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ColorRing
          margin-left="25px"
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
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
    <Box
      backgroundColor="#202126"
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="auto"
    >
      <div>
        <ModalButton onClick={toggleModal}>Select Columns</ModalButton>
        <Table />
      </div>
      <ModalWindow
        fields={selectedFields}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </Box>
  );
};
