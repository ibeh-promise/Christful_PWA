// components/layout/PageGrid.tsx
import { ReactNode } from "react";

interface PageGridProps {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
}

export function PageGrid({ left, center, right }: PageGridProps) {
  return (
    <div className="grid grid-cols-1 pt-20 lg:grid-cols-[280px_minmax(0,1fr)_280px] gap-4 py-5">

      {/* Left column */}
      <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-2 custom-scrollbar">
        {left}
      </aside>

      {/* Center column */}
      <main className="w-full">
        {center}
      </main>

      {/* Right column */}
      <aside className="hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pl-2 custom-scrollbar">
        {right}
      </aside>

    </div>
  );
}
