'use client'

import { useFormState } from "react-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import SubmitButton from "@/components/SubmitButton"
import { resendOtp } from "@/actions/auth"

export default function ResendOtpButton() {
     const[stateResendOtp,formActionResendOtp] = useFormState(resendOtp,{})
        
        useEffect(()=>{
        if(stateResendOtp?.status==='error'){
            toast.error(stateResendOtp.message)
        }else {
            toast.success(stateResendOtp.message)
        }

        if(stateResendOtp?.status==='success'){
            setMinutes(0)
            setSecond(35)
        }
        
        },[stateResendOtp])


       const [minutes, setMinutes] = useState(0); 
       const [second, setSecond] = useState(30); 


  useEffect(()=>{
   
    const interval = setInterval(() => {
        if(second >0){
            setSecond(second -1)
        }
        if(second===0){
            if(minutes===0){
                clearInterval(interval);
            }else {
                setSecond(59)
                setMinutes(minutes-1)
            }
        }
    }, 1000);

    return ()=>{
        clearInterval(interval)
    }

  },[second])


  return (
    <div>
        <div className="resend-opt-btn">
            {
                minutes > 0 || second > 0 ? (
                    <div className=" mb-1 me-3">
                    {minutes <10 ? `0${minutes}:`: minutes}
                    {second<10 ?`0${second}`:second}
                    </div>
                ) : 
                
                (<form action={formActionResendOtp}>
                    <SubmitButton title='ارسال دوباره' style="btn btn-dark"/>
                </form>)
            }
            
          </div>
    </div>
  )
}
