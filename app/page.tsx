import { cn } from "@/lib/utils";
import SideContent from "@/components/SideContent";

export default function Home() {
  return (
    <main className="grid grid-cols-12 place-content-center min-h-screen">
      <aside
        className={cn(
          "border border-r-white bg-[#ff4136] h-screen col-span-2 min-w-40 ",
        )}
      >
        <SideContent />
      </aside>
    </main>
  );
}
