import React from "react";
import { useState } from "react";


function Modal({selectedData, handleCancel, handleModifySubmit}) {
    
    const [modifyData, setModifyData] = useState(selectedData);

    const onCancel =  () => {
        handleCancel();
    }

    const onModifyChange = (e) => {
        const {name, value} = e.target;
        setModifyData({
            ...modifyData,
            [name] : value
        })
    }

    const onSubmitModify = (e) => {
        e.preventDefault();
        handleModifySubmit(modifyData);
    }

    return (
        <div className="h-screen w-full fixed left-0 top-0 items-center bg-black bg-opacity-70 flex justify-center" >
            <div className='bg-white rounded shadow-1g w-10/12 md:w-1/3'>
                <div className=''>
                    <h3 className='font-semibold'>고객 정보 수정하기</h3>
                </div>
                <form onSubmit={onSubmitModify}>
                    <div className=''>
                        <div className=''>아이디 : {modifyData.id}</div>
                        <div className=''>이름 : <input type="text" className='border-gray-100' name="name" value={modifyData.name} onChange={onModifyChange} /></div>
                        <div className=''>이메일 : <input type="email" className='border-gray-100' name="email" value={modifyData.email} onChange={onModifyChange} /></div>
                        <div className=''>전화번호 : <input type="text" className='border-gray-100' name="phone" value={modifyData.phone} onChange={onModifyChange} /></div>
                        <div className=''>웹사이트 : <input type="text" className='border-gray-100' name="website" value={modifyData.website} onChange={onModifyChange} /></div>
                    </div>
                    <div className='items-center flex justify-end'>
                        <button className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white" type='submit'>수정</button>
                        <button className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-white close=modal" onClick={onCancel}>취소</button>
                    </div>                
                </form>
            </div>
        </div>
    );
}

export default Modal;