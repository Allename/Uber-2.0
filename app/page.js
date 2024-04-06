import MapSection from "@/components/Home/MapSection";
import Search from "@/components/Home/Search";
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { useState } from "react";

export default function Home() {
  const [source , setSource] = useState([]);
  const [destination , setDestination] = useState([]);

  return (
    <SourceContext.Provider value={{source, setSource}}>
      <DestinationContext.Provider value={{destination, setDestination}}>
        <div className=' p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div>
            <Search />
          </div>
          <div className='col-span-2'>
            <MapSection />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}
