type StrategyProps = { title: string; description: string; image: string };

const strategy = [
  { title: "Our Target Market" },
  {
    description: "retailers: gas station ad independent retailers",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Box 3",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Box 4",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
  {
    description: "Box 5",
    image:
      "https://media.istockphoto.com/id/494128660/photo/gasoline-gushing-out-from-pump.jpg?s=612x612&w=0&k=20&c=kL5_Av3kL8rHBqIfMTW9s6SgUBX7wMR1cUgHUah5mKk=",
  },
];
export default function Strategy({}: StrategyProps) {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className=" bg-[#0d0d2b] h-[501.16px] border text-center col-span-1">
          <div className="text-center h-32 top-44 left-14 text-white font-bold text-8xl leading-[120px]">
            {strategy[0].title}
          </div>
        </div>
      </div>

      <div className={`col-span-1`} style={{ backgroundImage: `url('${strategy[1].image}'` }}>
        <div className="text-black text-3xl">{strategy[1].description}</div>
      </div>

      <div className="grid-c">
        <p>{strategy[2].description}</p>
        <img src={strategy[2].image} />
      </div>

      <div className="grid-d">
        <p>{strategy[3].description}</p>
        <img src={strategy[3].image} />
      </div>
      <div className="grid-e">
        <p>{strategy[4].description}</p>
        <img src={strategy[4].image} />
      </div>
    </div>
  );
}
