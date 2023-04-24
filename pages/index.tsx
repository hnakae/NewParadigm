import Romantointeger from "@/components/easy/Romantointeger";
import Twosum from "@/components/easy/Twosum";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap bg-slate-400 min-h-screen">
        <Twosum />
        <Romantointeger />
      </div>
    </>
  );
}
