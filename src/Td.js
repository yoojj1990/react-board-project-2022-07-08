import React from 'react';

function Td({item, handleModify, handleDelete}) {

    const onModify = () => {
        handleModify(item)
    }

    const onDelete = () => {
        handleDelete(item.id)
    }

    return (
        <tr className='bg-white border-2 border-gray-200'>
            <td className='text-center px-4 py-3'>{item.id}</td>
            <td className='px-4 py-3'>{item.name}</td>
            <td className='px-4 py-3'>{item.email}</td>
            <td className='px-4 py-3'>{item.phone}</td>
            <td className='px-4 py-3'>{item.website}</td>
            <td className='text-center px-4 py-3'>
                <button className="py-2 px-2 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-800" onClick={onModify}>수정</button>
            </td>
            <td className='text-center'>
                <button className="py-2 px-2 rounded-lg shadow-md text-white bg-red-500 hover:bg-red-800" onClick={onDelete}>삭제</button>
            </td>
        </tr>
    );
}

export default Td;