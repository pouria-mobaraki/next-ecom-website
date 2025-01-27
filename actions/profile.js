'use server'

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"





export async function editInfo(state,formData) {
    const name = formData.get('name')
    const email = formData.get('email')
  
  
    if(name===''){
      return {
          status:'error',
          message:'نام و نام خانوادگی الزامیست'
      }
    }
    if(email===''){
        return {
            status:'error',
            message:'ایمیل الزامیست'
        }
      }
  

       const token = cookies().get('token')
  
      const data = await postFetch('/profile/info/edit',{name,email},{ 'Authorization': `Bearer ${token.value}`})
  
      if(data.status==='success'){  
        console.log('success');
        
          return {
              status:data.status,
              message:'ویرایش اطلاعات با موفقیت انجام شد',
          }
      }else {
        console.log('error');
        
          return {
              status:data.status,
              message:handleError(data.message)
          }
      }
  }


  export async function createAddress(state,formData) {
    const title = formData.get('title')
    const cellphone = formData.get('cellphone')
    const postal_code = formData.get('postal_code')
    const province_id = formData.get('province_id')
    const city_id = formData.get('city_id')
    const address = formData.get('address')
  
  
    if(title===''){
      return {
          status:'error',
          message:' فیلد عنوان الزامیست '
      }
    }

    const cellphonePattern = /^(\+98|0)?9\d{9}$/;
    if(cellphone===''|| !cellphonePattern.test(cellphone)){
        return {
            status:'error',
            message:'شماره تماس نا معتبر است'
        }
      }


      const postalCodePattern = /^\d{5}[ -]?\d{5}$/i;
      if(postal_code===''|| !postalCodePattern.test(postal_code)){
          return {
              status:'error',
              message:' کد پستی نا معتبر است'
          }
        }

        if(address===''){
          return {
              status:'error',
              message:' فیلد ادرس الزامیست '
          }
        }
  

       const token = cookies().get('token')
  
      const data = await postFetch('/profile/addresses/create',{title,cellphone,postal_code,province_id,city_id,address},{ 'Authorization': `Bearer ${token.value}`})
  
      if(data.status==='success'){  
        console.log('success');
        
          return {
              status:data.status,
              message:'ثبت ادرس  با موفقیت انجام شد',
          }
      }else {
        console.log('error');
        
          return {
              status:data.status,
              message:handleError(data.message)
          }
      }
  }


  


 

  
