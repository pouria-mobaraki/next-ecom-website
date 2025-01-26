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


  


 

  
