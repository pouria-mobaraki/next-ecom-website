'use client'

import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import SubmitButton from "@/components/SubmitButton"
import { CheckOtp } from "@/actions/auth"

export default function CheckOtpForm() {
      const[stateOtp,formActionOtp] = useFormState(CheckOtp,{})
        
        useEffect(()=>{
        if(stateOtp?.status==='error'){
            toast.error(stateOtp.message)
        }else {
            toast.success(stateOtp.message)
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
        </div>
      </div>
    </div>
  );
}
