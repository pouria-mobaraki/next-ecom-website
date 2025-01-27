'use client';

import { useState } from "react";

export default function CreateFormAddresses({ data }) {
  const [filterCities, setFilterCities] = useState([]);
//   const [selectedProvince, setSelectedProvince] = useState(""); // مقدار اولیه خالی برای استان

  const changeProvince = (e) => {
    const provinceId = e.target.value;
    // setSelectedProvince(provinceId); // مقدار انتخابی استان را تنظیم کنید

    // فیلتر کردن شهرها براساس province_id
    const selectedCity = data.cities.filter(city => city.province_id == provinceId);
    setFilterCities(selectedCity);
    // console.log(filterCities);
    
  };

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
      <div className="collapse mt-3" id="collapseExample">
        <div className="card card-body">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
                className="form-select"
                onChange={changeProvince}
                value='' // مقدار کنترل شده برای استان
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
              <select className="form-select" value=''>
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
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div>
            <button className="btn btn-primary mt-4">ایجاد</button>
          </div>
        </div>
      </div>
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
