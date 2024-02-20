import { ReactNode, Suspense } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className=" ">{children}</div>
    </div>
  );
}
