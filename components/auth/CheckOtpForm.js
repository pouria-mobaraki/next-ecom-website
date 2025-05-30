'use client'

import { useFormState } from "react-dom"
import { useContext, useEffect } from "react"
import { toast } from "react-toastify"
import SubmitButton from "@/components/SubmitButton"
import { CheckOtp } from "@/actions/auth"
import AuthContext from "@/context/AuthContext"
import ResendOtpButton from "./ResendOtpButton"
import { useRouter } from "next/navigation"

export default function CheckOtpForm() {
      const[stateOtp,formActionOtp] = useFormState(CheckOtp,{})
       const {loginContext}= useContext(AuthContext)
       const router = useRouter()
        
        useEffect(()=>{
        if(stateOtp?.status==='error'){
            toast.error(stateOtp.message)
        }else {
            toast.success(stateOtp.message)
        }

        if(stateOtp?.status === 'success'){
          loginContext(stateOtp.user)
           router.push('/')
        }
        },[stateOtp])
  return (
    <div>
      <div className="card-body">
        <div className="form_container">
          <form action={formActionOtp}>
            <div className="mb-3">
              <label className="form-label">کد ورود</label>
              <input name="otp" type="text" className="form-control" />
            </div>
            <SubmitButton title="تایید" style="btn btn-primary btn-auth" />
          </form>

          <ResendOtpButton/>

        </div>
      </div>
    </div>
  );
}
