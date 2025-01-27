'use client';
import { createAddress } from "@/actions/profile"
import SubmitButton from "@/components/SubmitButton"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { useState } from "react";

export default function CreateFormAddresses({ data }) {
  const [filterCities, setFilterCities] = useState([]);

  const changeProvince = (e) => {
    const provinceId = e.target.value;
    const selectedCity = data.cities.filter(city => city.province_id == provinceId);
    setFilterCities(selectedCity);
  };

  const [stateCreate,formActionCreate] = useFormState(createAddress,{})
      useEffect(()=>{
         if(stateCreate?.status==='error'){
               toast.error(stateCreate.message)
           }else {
               toast.success(stateCreate.message)
           }
          
      },[stateCreate])

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>
      <form action={formActionCreate} className="collapse mt-3" id="collapseExample">
        <div className="card card-body">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input name="title" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input name="cellphone" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input name="postal_code" type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
              name="province_id"
                className="form-select"
                onChange={changeProvince}
                defaultValue='' // مقدار کنترل شده برای استان
              >
                <option value="" disabled>
                  -- انتخاب استان --
                </option>
                {data.provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-6">
              <label className="form-label">شهر</label>
              <select name="city_id" className="form-select" defaultValue=''>
                <option value="" disabled>
                  -- انتخاب شهر --
                </option>
                {filterCities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
              name="address"
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div>
            <SubmitButton title='ایجاد' style="btn btn-primary mt-4"/>
          </div>
        </div>
      </form>
    </>
  );
}



// 'use client'

// import { useState } from "react";

// export default function CreateFormAddresses({ data }) {

//     const [filterCities,setFilterCities] = useState(data.cities)
// const changeProvince = (e)=>{
//   const selectedCity = data.cities.filter(city => city.province_id == e.target.value)
//   console.log(selectedCity);
  
//    setFilterCities(selectedCity)
   
// }

//   return (
//     <>
//       <button
//         className="btn btn-primary"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapseExample"
//       >
//         ایجاد آدرس جدید
//       </button>
//       <div className="collapse mt-3" id="collapseExample">
//         <div className="card card-body">
//           <div className="row g-4">
//             <div className="col col-md-6">
//               <label className="form-label">عنوان</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="col col-md-6">
//               <label className="form-label">شماره تماس</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="col col-md-6">
//               <label className="form-label">کد پستی</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="col col-md-6">
//               <label className="form-label">استان</label>
//               <select className="form-select" onChange={changeProvince}>
//                 {data.provinces.map((province) => (
//                   <option key={province.id} value={province.id}>{province.name}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="col col-md-6">
//               <label className="form-label">شهر</label>
//               <select className="form-select">
//                 {
//                     filterCities.map((city)=>(
//                         <option key={city.id} value={city.id}>{city.name}</option>
//                     ))
//                 }
               
              
//               </select>
//             </div>
//             <div className="col col-md-12">
//               <label className="form-label">آدرس</label>
//               <textarea
//                 type="text"
//                 rows="5"
//                 className="form-control"
//               ></textarea>
//             </div>
//           </div>
//           <div>
//             <button className="btn btn-primary mt-4">ایجاد</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
