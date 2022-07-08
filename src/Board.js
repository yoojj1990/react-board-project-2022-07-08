import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

function Board() {

    const [info, setInfo] = useState([]);
    const [modalOn, setModalOn] = useState(false);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    },[]);

    const nextId = useRef(11); // id초기값 선언(기존 원소의 개수가 10개이므로 11부터 시작)

    const handleSave = (infoData) => {

        if (infoData.id) { // 수정에서 넘어온 데이터는 id값이 존재함
            setInfo(
                info.map(row => infoData.id === row.id ? { // 수정된 글의 id가 기존 테이블의 id와 같으면 
                    id:infoData.id,
                    name:infoData.name,
                    email:infoData.email,
                    phone:infoData.phone,
                    website:infoData.website
                }:row
            ))
        } else {

            // setInfo((prevInfo)=>{
            //     return[
            //         ...prevInfo,{
            //             id:nextId.current,
            //             name:infoData.name,
            //             email:infoData.email,
            //             phone:infoData.phone,
            //             website:infoData.website
            //         }]
            // })

            setInfo(info => info.concat({
                id:nextId.current,
                name:infoData.name,
                email:infoData.email,
                phone:infoData.phone,
                website:infoData.website
            }))

            nextId.current += 1;
        }
    };

    const handleModify = (item) => {
        setModalOn(true);
        const selectedData = {
            id:item.id,
            name:item.name,
            email:item.email,
            phone:item.phone,
            website:item.website
        };

        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    };

    const handleModifySubmit = (item) => {
        handleSave(item);
        setModalOn(false);
    };
 
    return (
        <div className=''>
            <div className='text-center font-bold text-[25px]'>
                고객 정보 리스트
            </div>
            <br/>
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
                <Tr info={info} handleModify={handleModify}></Tr>
            </table>
            <br />
            <br />
            <Post onSaveData={handleSave}></Post>
            {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} handleModifySubmit={handleModifySubmit}></Modal>}
        </div>
    );
}

export default Board;