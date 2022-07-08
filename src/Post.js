import React from 'react';
import { useState } from "react";

function Post({onSaveData}) {

    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
        website:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form)
        // 입력폼 초기화
        setForm({
            name:'',
            email:'',
            phone:'',
            website:''
        })
    };

    return (
        <div className='px-40'>
            <div className='text-center font-bold text-[20px]'>
                고객 정보 추가하기
            </div>
            <br/>
            <form className='text-center' onSubmit={handleSubmit}>
                <div className='flex flex-column md:flex-row mb-1'>
                    <label  className='w-3/12 font-semibold text-gray-600'>고객 이름</label>
                    <input className='w-full py-3 px-1 border-2 border-gray-300 text-gray-800 focus:text-gray-500 focus:border-gray-200' placeholder='이름을 입력해주세요' type="text" name="name" value={form.name} onChange={handleChange}></input>
                    <label  className='w-3/12 font-semibold text-gray-600'>이메일</label>
                    <input className='w-full py-3 px-1 border-2 border-gray-300 text-gray-800 focus:text-gray-500 focus:border-gray-200' placeholder='이메일을 입력해주세요' type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div className='flex flex-column md:flex-row'>
                    <label  className='w-3/12 font-semibold text-gray-600'>전화번호</label>
                    <input className='w-full py-3 px-1 border-2 border-gray-300 text-gray-800 focus:text-gray-500 focus:border-gray-200' placeholder='전화번호를 입력해주세요' type="text" name="phone" value={form.phone} onChange={handleChange}></input>
                    <label  className='w-3/12 font-semibold text-gray-600'>홈페이지</label>
                    <input className='w-full py-3 px-1 border-2 border-gray-300 text-gray-800 focus:text-gray-500 focus:border-gray-200' placeholder='홈페이지를 입력해주세요' type="text" name="website" value={form.website} onChange={handleChange}></input>
                </div>
                <br/>
                <div className='text-center'>
                    <button className='py-2 px-8 rounded-lg shadow-md text-white bg-blue-500 hover:bg-green-800' type="submit">저장</button>
                </div>
            </form>
        </div>
    );
}

export default Post;