'use client'


import { usePathname, useRouter } from "next/navigation";

export default function Paginate({links}) {
    const pathName = usePathname()

    const router = useRouter()

    const handlePage = (page)=> {
        console.log(page,pathName,router);
        // console.log(`${pathName}?page=${page}`);

        const params = new URLSearchParams()
        params.set('page', page)
        // console.log(params.toString());
        
        
        router.replace(`${pathName}?${params.toString()}`)
    }

  return (
    <div>
        <nav className="d-flex justify-content-center mt-5">
        <ul className="pagination">
         
          {links.slice(1,-1).map((link,index) => (
             <li key={index} className={link.active ? 'page-item active': 'page-item'}>
             <button onClick={()=>handlePage(link.label)}
             className="page-link">
               {link.label}
             </button>
           </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
