import styled from 'styled-components';

export const MainTable = styled.table`
  font-size: 14px;
  color: #fff;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  text-align: center;
  text-transform: uppercase;
  background-color: #2e2f37;
  padding: 6px 28px;
  border: 1px solid #393a3e;
`;

export const TableBody = styled.td`
  text-align: center;
  background-color: transparent;
  padding: 6px 28px;
  border: 1px solid #393a3e;
`;

export const Button = styled.button`
  width: 200px;
  border: none;
  border-radius: 6px;
  padding: 12px 48px;
  margin-top: 24px;
  background-color: #be5af0;
  color: #fff;
  cursor: pointer;
  transition: background-color 1s linear;

  :hover {
    background-color: #d28cf5;
  }
`;
