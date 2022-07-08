import React from 'react';

function Td({item, handleModify, handleDelete}) {

    const onModify = () => {
        handleModify(item)
    }

    const onDelete = () => {
        handleDelete(item.id)
    }

    return (
        <tr className=''>
            <td className='text-center'>{item.id}</td>
            <td className=''>{item.name}</td>
            <td className=''>{item.email}</td>
            <td className=''>{item.phone}</td>
            <td className=''>{item.website}</td>
            <td className='text-center'>
                <button className="py-2 px-2 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-800" onClick={onModify}>수정</button>
            </td>
            <td className='text-center'>
                <button className="py-2 px-2 rounded-lg shadow-md text-white bg-red-500 hover:bg-red-800" onClick={onDelete}>삭제</button>
            </td>
        </tr>
    );
}

export default Td;