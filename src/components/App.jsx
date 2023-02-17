import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../redux/store';
import { Table } from "./Table";

export const App = () => {
  const value = useSelector(state => state.myValue)
  const dispatch = useDispatch()
    return (
      <div>
       

        <Table/>
    
      </div>
    );
  };