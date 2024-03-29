import MapSection from "@/components/Home/MapSection";
import Search from "@/components/Home/Search";

export default function Home() {
  return (
    <div className=' p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
      <div>
        <Search />
      </div>
      <div className='col-span-2'>
        <MapSection />
      </div>
    </div>
  )
}
