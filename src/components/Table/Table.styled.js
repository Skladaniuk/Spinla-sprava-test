import styled from 'styled-components';

export const MainTable = styled.table`
    color: #fff;
    margin-top: 12px;
    border-collapse: collapse;
`

export const TableHead = styled.th`
    text-align: center;
    text-transform: uppercase;
    background-color: #2E2F37;
    padding: 6px 32px;
    border: 1px solid #393A3E;
`;

export const TableBody = styled.td`
text-align: center;
    background-color: transparent;
     padding: 6px 36px;
     border: 1px solid #393A3E;
`;

export const Button = styled.button`
    width: 200px;
    border: none;
    border-radius: 6px;
    padding: 12px 48px;
    background-color: #BE5AF0;
    color: #fff;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(.17,.67,.55,.68);

    :hover {
        background-color: #d28cf5
    }
`;