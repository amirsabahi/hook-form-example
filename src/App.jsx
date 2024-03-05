import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './App.css'

const schema = yup.object({
  firstName: yup.string().required()
}).required();

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm(
   {resolver: yupResolver(schema)} 
  );

    const onSubmit = (data) => console.info(data)

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors?.firstName?.message}</p>
      <input type='submit' />
    </form>
    </>
  )
}

export default App
