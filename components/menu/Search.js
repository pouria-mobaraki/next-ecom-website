"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(remove) {
    const params = new URLSearchParams();
    if (remove) {
      params.delete("search");
      params.delete("page");
      setTerm("");
    } else {
      params.set("search", term);
    }
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div>
      <div>
        <label className="form-label">جستجو</label>
        {/* ایکون ضربدر */}
        {searchParams.has("search") && (
          <span
            onClick={() => handleSearch(true)}
            className="text-danger fs-4 cursor-pointer"
          >
            <i className="bi bi-x"></i>
          </span>
        )}
        {/* ایکون ضربدر */}

        <div className="input-group mb-3">
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
            className="form-control"
            placeholder="نام محصول ..."
          />
          <button
            onClick={() => term !== "" && handleSearch()}
            className="input-group-text"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
