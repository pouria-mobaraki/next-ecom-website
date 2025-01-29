import CreateFormAddresses from "@/components/profile/addresses/CreateForm";
import EditForm from "@/components/profile/addresses/EditForm";
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";


export default async function AddressesPage() {
    const token = cookies().get("token");
    const data = await getFetch("/profile/addresses", {
      'Authorization': `Bearer ${token.value}`,
    });

    console.log(data)
    
  return (
    <>
          <CreateFormAddresses data={data}/>
                    <hr />
                    {
                        data.addresses.map(address=>(
                            <EditForm key={address.id} data={data} address={address}/>
                        ))
                        
                        
                    }
          
                     
    </>
  )
}
