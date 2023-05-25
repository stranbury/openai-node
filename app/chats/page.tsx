import {FC } from 'react';
import styled from '@emotion/styled';
import Chat from '../../components/Chat';
import Feather from 'feather-icons-react'
const Home: FC = () => (
    <div className=' grid grid-cols-12 relative gap-8 h-full w-full  justify-center align-middle py-6 '>
      <section className='col-span-none hidden md:flex md:col-span-4 h-full w-full '>
        <div className=' bg-black h-32 w-full p-2'>
          <div className='flex h-full w-full bg-slate-300  justify-around p-8'>
            <button >
             <Feather icon='message-circle' size={32} color='white'  />
            </button>
            <button >2</button>
            <button >3</button>
          </div>
          <div>
            <input className='bg-slate-300 w-full h-8 p-6' type="text" placeholder="Search" />
            <div className='list'>
                  {
                    [1,2,3,4,5,6,7,8,9,10].map((item,index)=>(
                      <div key={index} className='flex justify-between items-center p-2'>
                        <div className='flex items-center'>
                          <div className='h-8 w-8 bg-slate-300 rounded-full'></div>
                          <div className='ml-2'>
                            <p className='text-white'>Name</p>
                            <p className='text-gray-400'>Last message</p>
                          </div>
                        </div>
                        <div className='text-gray-400'>
                          12:00
                        </div>
                      </div>

                    ))
                  }
            </div>
          </div>
        </div>
      
      </section>
      <section className='md:col-span-8 col-span-12  h-full w-full'>
        <Chat chatName="text"/>
      </section>
    </div>
  );

  export default Home;