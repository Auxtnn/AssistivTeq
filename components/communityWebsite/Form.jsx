'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #66328E',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

export default function Form({open,  handleClose}) {

  const [fullname, setFullname] = React.useState('')
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='mb-4 text-primary'>
            Please Fill the form to be added to the community
          </h1>
          <form className='flex flex-col gap-3'>
            <input 
              placeholder='Full Name' 
              // value={fullname}
              onChange={e => setFullname(e)}
              className='border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]'
            />
            <input 
              placeholder='Email Address' 
              className='border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]'
            />
            <input 
              placeholder='Phone Number' 
              className='border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]'
            />
            <input 
              placeholder='Disability Type' 
              className='border-2 border-primary rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]'
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
