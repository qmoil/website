type StrategyProps = { title: string; description: string; image: string };

const strategy = [
  { title: "Our Target Market" },
  {
    description: "Retailers: gas station and independent retailers",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Industries:Manufacturing, construction, and other industrial sectors.",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Households:Residential communities and individual households",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Hotels and Restaurants:Hospitality sector catering to their energy needs.",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
];
export default function Strategy({}: StrategyProps) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
      <div className="col-span-26 relative">
        <div className=" bg-[#0d0d2b] h-28 border text-center ">
          <div className="text-center h-32 top-44 left-14 text-white font-bold text-6xl leading-[120px]">
            {strategy[0].title}
          </div>
        </div>
      </div>

      <div className={`col-span-1  h-96  p-5 `} style={{ backgroundImage: `url('${strategy[1].image}'` }}>
        <div className="text-black text-3xl text-center">{strategy[1].description}</div>
      </div>

      <div className={`col-span-1`} style={{ backgroundImage: `url('${strategy[2].image}'` }}>
        <div className="text-black text-3xl text-center overflow-y-auto max-h-full">{strategy[2].description}</div>
      </div>
      
      <div className={`col-span-1`} style={{ backgroundImage: `url('${strategy[3].image}'` }}>
        <div className="text-black text-3xl text-center">{strategy[3].description}</div>
      </div>
      
      <div className={`col-span-1`} style={{ backgroundImage: `url('${strategy[4].image}'` }}>
        <div className="text-black text-3xl text-center">{strategy[3].description}</div>
      </div>
    
    </div>
  );
}
