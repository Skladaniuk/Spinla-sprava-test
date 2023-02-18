import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    
`

export const Backdrop = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
`

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    padding: 48px 48px;
    background-color: #202126;
    transform: translate(-50%,-50%);
    border-radius: 12px;
`;


export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    border: none;
    border-radius: 6px;
    padding: 8px 48px;
    background-color: #BE5AF0;
    color: #fff;
    margin-top: 12px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(.17,.67,.55,.68);

    :hover {
        background-color: #d28cf5
    }
`;

export const ListContainer = styled.div`
    padding: 18px;
    background-color: #1A1B1E;
    border-radius: 12px;
    height: 400px;
    width: 320px;

    :not(:last-child) {
        margin-right: 32px;
    }
`;

export const Title = styled.h2`
    color: #fff;
    font-size: 18px;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export const ListButton = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Item = styled.li`
    font-size: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #fff;
    background-color: #202126;
    padding: 8px 12px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`;

export const ItemContainer = styled.div`
    :not(:last-child) {
        margin-bottom: 8px;
    }
`