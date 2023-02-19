import React from 'react';
import { useSelector } from 'react-redux';

import CONST from 'const';
import { MainTable, TableHead, TableBody } from './Table.styled';

export const Table = () => {
  const userList = useSelector(state => state.userList.entities);
  const selectedFields = useSelector(state => state.userList.activeFields);

  return (
    <MainTable>
      <thead>
        <tr>
          {selectedFields.name && (
            <TableHead>{CONST.columnNames.name}</TableHead>
          )}
          {selectedFields.username && (
            <TableHead>{CONST.columnNames.username}</TableHead>
          )}
          {selectedFields.number && (
            <TableHead>{CONST.columnNames.number}</TableHead>
          )}
          {selectedFields.company && (
            <TableHead>{CONST.columnNames.company}</TableHead>
          )}
          {selectedFields.email && (
            <TableHead>{CONST.columnNames.email}</TableHead>
          )}
          {selectedFields.website && (
            <TableHead>{CONST.columnNames.website}</TableHead>
          )}
          {selectedFields.adress && (
            <TableHead>{CONST.columnNames.address}</TableHead>
          )}
          {selectedFields.id && <TableHead>{CONST.columnNames.id}</TableHead>}
        </tr>
      </thead>
      <tbody>
        {userList &&
          userList.map(item => (
            <tr key={item.id}>
              {selectedFields.name && <TableBody>{item.name}</TableBody>}
              {selectedFields.username && (
                <TableBody>{item.username}</TableBody>
              )}
              {selectedFields.number && <TableBody>{item.number}</TableBody>}
              {selectedFields.company && <TableBody>{item.company}</TableBody>}
              {selectedFields.email && <TableBody>{item.email}</TableBody>}
              {selectedFields.website && <TableBody>{item.website}</TableBody>}
              {selectedFields.adress && <TableBody>{item.address}</TableBody>}
              {selectedFields.id && <TableBody>{item.id}</TableBody>}
            </tr>
          ))}
      </tbody>
    </MainTable>
  );
};
