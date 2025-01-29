'use client';
import { editAddress } from "@/actions/profile"
import SubmitButton from "@/components/SubmitButton"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { useState } from "react";
import DeleteForm from "./DeleteForm";

export default function EditFormAddress({ data,address }) {
  const [filterCities, setFilterCities] = useState(data.cities);
  console.log(data);
  

  const changeProvince = (e) => {
    const provinceId = e.target.value;
    const selectedCity = data.cities.filter(city => city.province_id == provinceId);
    setFilterCities(selectedCity);
  };

  const [stateEdit,formActionEdit] = useFormState(editAddress,{})
      useEffect(()=>{
         if(stateEdit?.status==='error'){
               toast.error(stateEdit.message)
           }else {
               toast.success(stateEdit.message)
           }
          
      },[stateEdit])

  return (
    <>
     
        <div className="position-relative" >
        <form action={formActionEdit} className="card card-body mt-3">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input name="title" defaultValue={address.title} type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input name="cellphone" defaultValue={address.cellphone} type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input name="postal_code" defaultValue={address.postal_code} type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
              name="province_id"
                className="form-select"
                onChange={changeProvince}
                defaultValue={address.province_id}
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
              <select name="city_id" defaultValue={address.city_id} className="form-select" >
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
              defaultValue={address.address}
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <input type="hidden" value={address.id} name="address_id"/>
          </div>
          <div>
            <SubmitButton title='ویرایش' style="btn btn-primary mt-4"/>
          </div>
        </form>
        <DeleteForm addressId={address.id} />
      </div>
     
    </>
  );
}




