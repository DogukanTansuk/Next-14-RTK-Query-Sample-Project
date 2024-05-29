'use client'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ErrorMessage, Field, Formik} from 'formik'
import React, {FC} from 'react'
import Modal from 'react-modal'
import {number} from 'yup'
import * as Yup from 'yup'
import { useGetUserQuery } from '../apis'

export interface UserModalProps {
  isOpen: boolean
  toggleModal: () => void
  refetch: () => void
}

export const UserModal: FC<UserModalProps> = ({isOpen, toggleModal, refetch}) => {

  const {isSuccess, data, isLoading} = useGetUserQuery({})

  return (
    <div className='flex justify-center items-center '>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal()}
        className='w-full h-full bg-bgBlue rounded-xl flex justify-center items-center'>
        <div className='px-4 py-4 flex flex-col gap-8 w-full'>
          <button
            type='button'
            title='button'
            className='text-white flex justify-end w-full'
            onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark} size='xl' className='text-white ' />
          </button>
          <h3 className='text-white flex w-full items-center justify-center text-2xl'>
            User : {}
          </h3>
          
        </div>
      </Modal>
    </div>
  )
}
