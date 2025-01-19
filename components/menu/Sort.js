'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function Sort() {

    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    
      const handleClick = (type)=> {
    
        const params = new URLSearchParams(searchParams)
        params.set('sortBy', type)
        params.delete('page')
        router.replace(`${pathName}?${params.toString()}`)
    }

  return (
    <div>
        <div>
                        <label className="form-label">مرتب سازی</label>
                        <div className="form-check my-2">
                            <input checked={searchParams.has('sortBy')&& searchParams.get('sortBy')=='max'}
                            onChange={()=>handleClick('max')} className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input checked={searchParams.has('sortBy')&& searchParams.get('sortBy')=='min'}
                            onChange={()=>handleClick('min')} className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                کمترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input checked={searchParams.has('sortBy')&& searchParams.get('sortBy')=='bestseller'}
                             onChange={()=>handleClick('bestseller')} className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                پرفروش ترین
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input checked={searchParams.has('sortBy')&& searchParams.get('sortBy')=='sale'}
                            onChange={()=>handleClick('sale')} className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                با تخفیف
                            </label>
                        </div>
                    </div>
    </div>
  )
}
