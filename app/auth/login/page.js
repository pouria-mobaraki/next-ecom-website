'use client'
import LoginForm from "@/components/auth/LoginForm"
import CheckOtpForm from "@/components/auth/CheckOtpForm"
import { useState } from "react"

export default function loginPage() {

const[step,setStep] = useState(1)
    
  return (
    <div>
         <section className="auth_section book_section">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    {/* <div className="card">
                        <div className="card-body">
                            <div className="form_container">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">ایمیل</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">رمز عبور</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-auth">ورود</button>
                                </form>
                            </div>

                            <h6 className="mt-4">در صورتی که حساب ندارید روی
                                <a href="register.html" style="color: #e69c00;">عضویت</a>
                                کلیک کنید
                            </h6>
                        </div>
                    </div> */}

                    {/* <hr /> */}

                    <div className="card">

                        {/* <LoginForm/> */}
                       {step == 1 && <LoginForm setStep={setStep}/>}
                      
                       {step == 2 && <CheckOtpForm/>}

                       

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
