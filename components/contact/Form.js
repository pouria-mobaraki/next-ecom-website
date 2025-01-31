'use client'
import { create } from "@/actions/contact"
import { useFormState } from "react-dom"
import SubmitButton from "../SubmitButton"
import { useEffect } from "react"
import { toast } from "react-toastify"


export default function Form() {

    const[state,formAction] = useFormState(create,{})

    useEffect(()=>{
    if(state?.status==='error'){
        toast.error(state.message)
    }else {
        toast.success(state.message)
    }
    },[state])
    
  return (
    <div>
         <form action={formAction}>
                            <div>
                                <input name="name" type="text" className="form-control" placeholder="نام و نام خانوادگی" />
                            </div>
                            <div>
                                <input name="email" type="email" className="form-control" placeholder="ایمیل" />
                            </div>
                            <div>
                                <input name="subject" type="text" className="form-control" placeholder="موضوع پیام" />
                            </div>
                            <div>
                                <textarea name="text" rows="10" style={{height:'100px'}} className="form-control"
                                    placeholder="متن پیام"></textarea>
                            </div>
                            <div className="btn_box">
                                <SubmitButton title='ارسال پیام'/>
                            </div>
                        </form>
    </div>
  )
}
