import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { ModalWindow } from './ModalWindow';
import { useSelector, useDispatch } from 'react-redux';
import * as listOperation from '../redux/list/listOperation'

export const Table = () => {


const [selectedFields, setSelectedFields] = useState({name:true,
    username:true,number:true, company:true, email:false, website:false, adress:false, id:false});

    const dispatch = useDispatch()
    const list = useSelector(state => state.list.entities)

useEffect(() => {
   dispatch(listOperation.fetchList())
    }, [dispatch])




  return (
    <div>
    
       <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
         
          {selectedFields.name && <th>Name</th>}
          {selectedFields.username && <th>Username</th>}
          {selectedFields.number && <th>Phone</th>}
          {selectedFields.company && <th>Company</th>}
          {selectedFields.email && <th>Email</th>}
          {selectedFields.website && <th>Website</th>}
          {selectedFields.adress && <th>Adress</th>}
          {selectedFields.id && <th>ID</th>}
        </tr>
      </thead>
      <tbody>

        {
            list && list.map((item) => (
                 <tr key = {item.id}>
               { selectedFields.name && <td>{item.name}</td>}  
               { selectedFields.username && <td>{item.username}</td>} 
               { selectedFields.number && <td>{item.number}</td>} 
               {selectedFields.company && <td>{item.company}</td>}
               {selectedFields.email && <td>{item.email}</td>}
               {selectedFields.website && <td>{item.website}</td>}
               {selectedFields.adress && <td>{item.adress}</td>} 
               {selectedFields.id && <td>{item.id}</td>}          
              </tr>
            ))
        }


      
       
      </tbody>
    </ReactBootStrap.Table>
    <ModalWindow fields = {selectedFields}/>
    </div>
  )
}

