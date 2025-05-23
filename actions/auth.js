'use server'

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"


export async function Login(stateLogin,formData) {
  const cellphone = formData.get('cellphone')


  if(cellphone===''){
    return {
        status:'error',
        message:'شماره موبایل الزامی است'
    }
  }

  const pattern = /^(\+98|0)?9\d{9}$/;

  if(!pattern.test(cellphone)){
    return {
        status:'error',
        message:'فرمت شماره موبایل اشتباه است'
    }
  }

    const data = await postFetch('/auth/login',{cellphone})

    if(data.status==='success'){
        cookies().set({
            name:'login_token',
            value:data.data.login_token,
            httpOnly:true,
            path:'/',
            maxAge:60*60*24*7

        })
        return {
            status:data.status,
            message:'کد تایید ارسال شد'
        }
    }else {
        return {
            status:data.status,
            message:handleError(data.message)
        }
    }
}


export async function CheckOtp(stateOtp,formData) {
    const otp = formData.get('otp')
  
  
    if(otp===''){
      return {
          status:'error',
          message:'کد ورودالزامی است'
      }
    }
  
    const pattern = /^[0-9]{6}$/;
  
    if(!pattern.test(otp)){
      return {
          status:'error',
          message:'کد ورود معتبر نیست '
      }
    }

       const loginToken =cookies().get('login_token')

       if(!loginToken){
        return{
            status: 'error',
            message:'توکن ورودی شما معتبر نیست'
        }
       }
  
      const data = await postFetch('/auth/check-otp',{otp,login_token:loginToken.value})
  
      if(data.status==='success'){
        cookies().delete('login_token')
          cookies().set({
              name:'token',
              value:data.data.token,
              httpOnly:true,
              path:'/',
              maxAge:60*60*24*7
  
          })
          return {
              status:data.status,
              message:'شما با موفقیت وارد شدید',
              user:data.data.user
          }
      }else {
          return {
              status:data.status,
              message:handleError(data.message)
          }
      }
  }


  export async function resendOtp(stateResendOtp,formData) {
    const loginToken =cookies().get('login_token')

       if(!loginToken){
        return{
            status: 'error',
            message:'توکن ورودی شما معتبر نیست'
        }
       }
    
      const data = await postFetch('/auth/resend-otp',{login_token:loginToken.value})
  
      if(data.status==='success'){
          cookies().set({
              name:'login_token',
              value:data.data.login_token,
              httpOnly:true,
              path:'/',
              maxAge:60*60*24*7
  
          })
          return {
              status:data.status,
              message:'کد ورود دوباره برای شما ارسال شد',
          }
      }else {
          return {
              status:data.status,
              message:handleError(data.message)
          }
      }
  }


  export async function me() {
    const token = cookies().get('token')
  
  
    if(!token){
      return {
          error:'Not Authorized'
      }
    }
  
  
      const data = await postFetch('/auth/me',{},{'Authorization':`Bearer ${token.value}`})
  
      if(data.status==='success'){
          return {
              user:data.data
          }
      }else {
          return {
              error:'User Forbiden'
          }
      }
  }


  export async function logOut() {
    const token = cookies().get('token')
      const data = await postFetch('/auth/logout',{},{'Authorization':`Bearer ${token.value}`})
  
      if(data.status==='success'){
        cookies().delete('token')
          return {
            success:'you are logout'
          }
      }else {
          return {
              error:'User Forbiden'
          }
      }
  }

  
