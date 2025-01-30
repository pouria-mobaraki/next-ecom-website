import Table from "@/components/profile/transactions/Table";


export default function page({searchParams}) {
  const params =  new URLSearchParams(searchParams)
  console.log(params);
  
  return (
    <>
      <Table params={params.toString()}/> 
    </>
  )
}
