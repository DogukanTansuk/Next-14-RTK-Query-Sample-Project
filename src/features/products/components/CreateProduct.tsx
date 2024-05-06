'use client'

import {Formik} from 'formik'
import React from 'react'
import * as Yup from 'yup'
import {useCreateProductMutation} from '../apis'

import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'

export const CreateProduct = () => {
  const [createProduct, {data, isLoading}] = useCreateProductMutation()
  const initialValues = {
    title: '',
    description: '',
    price: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  }

  const productValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    brand: Yup.string().required('Brand is required'),
    category: Yup.string().required('Category is required'),
    thumbnail: Yup.string().required('Thumbnail is required'),
  })

  return (
    <>
      <div className='text-xl text-center w-full'>
        <h1>Create Product</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={productValidationSchema}
        onSubmit={(values) => {
          console.log('aaa', values)
          createProduct(values)
        }}>
        {({handleChange, values, handleSubmit}) => (
          <form className=' w-full justify-center items-center flex mt-8'>
            <div className='flex flex-col w-1/2 gap-2'>
              <TextField id='filled-basic' label='Title' variant='filled' />
              <TextField id='filled-basic' label='Description' variant='filled' />
              <TextField id='filled-basic' label='Price' variant='filled' />
              <TextField id='filled-basic' label='Brand' variant='filled' />
              <TextField id='filled-basic' label='Category' variant='filled' />
              <TextField id='filled-basic' label='Thumbnail' variant='filled' />

              <div className='flex flex-col mt-4'>
                <button
                  type='button'
                  onClick={() => handleSubmit()}
                  disabled={isLoading}
                  className='text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'>
                  Create Product
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}
