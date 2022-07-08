import React from 'react';
import Td from './Td';

function Tr({info, handleModify, handleDelete}) {
    return (
        <tbody>
            {
                info.map(item=>{
                    return(
                        <Td key={item.id} item={item} handleModify={handleModify} handleDelete={handleDelete}></Td>
                    )
                })
            }
        </tbody>
    );
}

export default Tr;