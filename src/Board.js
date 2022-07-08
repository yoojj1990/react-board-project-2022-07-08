import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Tr from './Tr';

function Board() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <div className=''>
            <div className='text-center font-bold text-[25px]'>
                고객 정보 리스트
            </div>
            <table className='min-w-full table-auto text-gray-800'>
                <thead className=''>
                    <tr className='bg-gray-800'>
                        <th className='text-gray-300'>아이디</th>
                        <th className='text-gray-300'>고객이름</th>
                        <th className='text-gray-300'>이메일</th>
                        <th className='text-gray-300'>전화번호</th>
                        <th className='text-gray-300'>웹사이트</th>
                        <th className='text-gray-300'>글수정</th>
                        <th className='text-gray-300'>글삭제</th>
                    </tr>
                </thead>
                <Tr info={info}></Tr>
            </table>
        </div>
    );
}

export default Board;