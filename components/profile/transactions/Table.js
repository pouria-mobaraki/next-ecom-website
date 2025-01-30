import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";
import Paginate from "./Paginate";

export default async function Table({ params }) {
  const token = cookies().get("token");
  const data = await getFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token.value}`,
  });
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{transaction.id}</th>
                <td>{transaction.address_title}</td>
                <td> {transaction.status}</td>
                <td>
                  <span
                    className={
                      transaction.payment_status == "موفق"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {" "}
                    {transaction.payment_status}
                  </span>
                </td>
                <td>{transaction.paying_amount} تومان</td>
                <td>{transaction.created_at}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginate links={data.meta.links} />
    </>
  );
}
