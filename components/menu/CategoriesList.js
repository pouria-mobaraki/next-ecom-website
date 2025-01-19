'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoriesList({ categories }) {
  
const pathName = usePathname()
const router = useRouter()
const searchParams = useSearchParams()

  const handleClickCat = (categoryId)=> {

    const params = new URLSearchParams(searchParams)
    params.set('category', categoryId)
    params.delete('page')
    router.replace(`${pathName}?${params.toString()}`)
}


  return (
    <div>
      <div className="filter-list">
        <div className="form-label">دسته بندی</div>
        <ul>
          {categories.map((category) => (
            <li 
            key={category.id} 
             onClick={()=>handleClickCat(category.id)}
             className={searchParams.has('category') && searchParams.get('category') == category.id ?"my-2 filter-list-active" :"my-2 cursor-pointer"}
             >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
