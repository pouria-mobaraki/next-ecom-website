'use client'

import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import SubmitButton from "@/components/SubmitButton"
import { Login } from "@/actions/auth"

export default function LoginForm({setStep}) {
    const[stateLogin,formActionLogin] = useFormState(Login,{})
    
    useEffect(()=>{
    if(stateLogin?.status==='error'){
        toast.error(stateLogin.message)
    }else {
        toast.success(stateLogin.message)
    }
    if(stateLogin?.status==='success'){
        setStep(2)
    }
    },[stateLogin])
  return (
    <div>
      <div className="card-body">
        <div className="form_container">
          <form action={formActionLogin}>
            <div className="mb-3">
              <label className="form-label">شماره موبایل</label>
              <input name="cellphone" type="text" className="form-control" />
            </div>
            <SubmitButton title="ورود" style="btn btn-primary btn-auth" />
          </form>
        </div>
      </div>
    </div>
  );
}
