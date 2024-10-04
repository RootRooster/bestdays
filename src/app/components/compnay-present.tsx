import Link from "next/link";
import React from "react";
export default function CompanyP({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="m-20 min-h-[100vh]">
        {children}
        <div className="m-10">
          <Link href="/sponsors">
            <p className="font-bold hover:text-gray-400">&lt; Nazaj</p>
          </Link>
        </div>
      </div>
    </>
  );
}
