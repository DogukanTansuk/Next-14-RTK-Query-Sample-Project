'use client'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ErrorMessage, Field, Formik} from 'formik'
import React, {FC} from 'react'
import Modal from 'react-modal'
import {number} from 'yup'
import * as Yup from 'yup'

export interface UserModalProps {
  isOpen: boolean
  toggleModal: () => void
  refetch: () => void
}

const initialValues = {
  question: '',
  answers: [''],
  trueAnswerIndex: number,
  difficulty: number,
  category: '',
}

const userValidationSchema = Yup.object().shape({
  question: Yup.string().required('Question is required'),
  answers: Yup.array().of(Yup.string()).required('Answers is required'),
  trueAnswerIndex: Yup.number().required('True Answer Index is required'),
  difficulty: Yup.number().required('Difficulty is required'),
  category: Yup.string().required('Category is required'),
})

export const UserModal: FC<UserModalProps> = ({isOpen, toggleModal, refetch}) => {
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
            Soru Ekleyin
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={(values) => {
              console.info(`values`, values)
            }}>
            {({isValid, dirty, errors, handleSubmit, values, setFieldValue}) => (
              <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                <div>
                  <Field
                    type='text'
                    name='question'
                    placeholder='Question'
                    value={values.question}
                    className='w-full py-1 px-2 rounded-md text-lg'
                  />
                  <ErrorMessage name='question' component='div' className='text-white' />
                </div>
                <div>
                  <Field
                    type='text'
                    name='answers'
                    placeholder='Answers'
                    value={values.answers}
                    className='w-full py-1 px-2 rounded-md text-lg'
                  />
                  <ErrorMessage name='answers' component='div' className='text-white' />
                </div>
                <div>
                  <Field
                    type='number'
                    name='trueAnswerIndex'
                    placeholder='True Answer Index'
                    value={values.trueAnswerIndex}
                    className='w-full py-1 px-2 rounded-md text-lg'
                  />
                  <ErrorMessage name='trueAnswerIndex' component='div' className='text-white' />
                </div>
                <div>
                  <Field as='select' name='category' className='w-full py-1 px-2 rounded-md text-lg'>
                    <option value='' disabled className=''>Seçiniz</option>
                    <option value='şehir'>Şehir</option>
                    <option value='green'>Green</option>
                    <option value='blue'>Blue</option>
                  </Field>
                  <ErrorMessage name='category' component='div' className='text-white' />
                </div>
                <div>
                  <Field
                    type='number'
                    name='difficulty'
                    placeholder='Difficulty'
                    value={values.difficulty}
                    className='w-full py-1 px-2 rounded-md text-lg'
                  />
                  <ErrorMessage name='difficulty' component='div' className='text-white' />
                </div>

                <button
                  type='submit'
                  className='w-full py-2 bg-white text-bgBlue rounded-md font-semibold text-lg'>
                  Gönder
                </button>
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  )
}
