import {FC } from 'react';
import styled from '@emotion/styled';
import Chat from '../components/Chat';
import Feather from 'feather-icons-react'
const Home: FC = () => (
    <div className=' grid grid-cols-12 relative gap-2 h-full w-full  justify-center align-middle py-6 '>
      <section className='col-span-none hidden md:flex md:col-span-4 h-full w-full '>
        <div className=' bg-black h-32 w-full p-2'>
          <div className='flex h-full w-full bg-slate-300  justify-around p-8'>
            <button >
              <i>
             <Feather icon='message-circle' size={32} color='white' />
              </i>

             
            </button>
            <button >2</button>
            <button >3</button>

          </div>
        </div>
      
      </section>
      <section className='md:col-span-8 col-span-12  h-full w-full'>
          <Chat chatName="text"/>

      </section>
    </div>
  );

  export default Home;