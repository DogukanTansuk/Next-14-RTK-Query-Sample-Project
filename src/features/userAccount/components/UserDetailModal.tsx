'use client'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {FC, useEffect} from 'react'
import Modal from 'react-modal'
import {useGetUserQuery} from '../apis'
import {useAppDispatch, useAppSelector} from '@/hooks'
import {getUserAccountState} from '../userAccountSelector'
import {setUserAccount} from '../userAccountSlice'

export interface UserDetailModalProps {
  isOpen: boolean
  toggleModal: () => void
  refetch: () => void
}

export const UserDetailModal: FC<UserDetailModalProps> = ({isOpen, toggleModal, refetch}) => {
  const {isSuccess, data, isLoading} = useGetUserQuery({})

  const selectedUser = useAppSelector(getUserAccountState())

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserAccount(data))
    }
  }, [isSuccess])

  return (
    <div className='flex  '>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal()}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '60%',
          },
        }}>
        <div className=' flex flex-col gap-2 w-full'>
          <div className=''>
            <button
              type='button'
              title='button'
              className='text-black flex justify-end w-full'
              onClick={toggleModal}>
              <FontAwesomeIcon icon={faXmark} size='xl' className='text-black ' />
            </button>
            <h3 className='text-blue-700  flex w-full items-center justify-center text-2xl border-b-2 border-blue-400'>
               {selectedUser?.firstName} {selectedUser?.lastName}
            </h3>
          </div>

          <div className='flex justify-between px-[10%] pt-4'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>First Name:</label>
                <span className='text-black'>{selectedUser?.firstName}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Last Name:</label>
                <span className='text-black'>{selectedUser?.lastName}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Username:</label>
                <span className='text-black'>{selectedUser?.username}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>MaidenName:</label>
                <span className='text-black'>{selectedUser?.maidenName}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Role:</label>
                <span className='text-black'>{selectedUser?.role}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Email:</label>
                <span className='text-black'>{selectedUser?.email}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Phone:</label>
                <span className='text-black'>{selectedUser?.phone}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Address:</label>
                <span className='text-black'>
                  {selectedUser?.address.address}/{selectedUser?.address.city}
                </span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Country:</label>
                <span className='text-black'>{selectedUser?.address.country}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>University:</label>
                <span className='text-black'>{selectedUser?.university}</span>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Company:</label>
                <span className='text-black'>{selectedUser?.company.name}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Department:</label>
                <span className='text-black'>{selectedUser?.company.department}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Title:</label>
                <span className='text-black'>{selectedUser?.company.title}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Age:</label>
                <span className='text-black'>{selectedUser?.age}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Birth Date:</label>
                <span className='text-black'>{selectedUser?.birthDate}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Eye Color:</label>
                <span className='text-black'>{selectedUser?.eyeColor}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Height:</label>
                <span className='text-black'>{selectedUser?.height}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Weight:</label>
                <span className='text-black'>{selectedUser?.weight}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Hair type:</label>
                <span className='text-black'>{selectedUser?.hair.type}</span>
              </div>
              <div className='flex flex-row gap-2'>
                <label className='text-blue-700 font-semibold'>Hair color:</label>
                <span className='text-black'>{selectedUser?.hair.color}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
