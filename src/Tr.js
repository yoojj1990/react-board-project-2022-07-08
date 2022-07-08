import React from 'react';
import Td from './Td';

function Tr({info, handleModify}) {
    return (
        <tbody>
            {
                info.map(item=>{
                    return(
                        <Td key={item.id} item={item} handleModify={handleModify}></Td>
                    )
                })
            }
        </tbody>
    );
}

export default Tr;