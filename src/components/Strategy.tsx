import Strategy1 from '../assets/strategy1.svg';
import Strategy2 from '../assets/strategy2.svg';
import Strategy3 from '../assets/strategy3.svg';
import Strategy4 from '../assets/strategy4.svg';

const strategies = [
  {
    title: 'Retailers: ',
    description: 'gas station and independent retailers',
    image: Strategy1,
  },
  {
    title: 'Industries: ',
    description: 'Manufacturing, construction, and other industrial sectors.',
    image: Strategy2,
  },
  {
    title: 'Households: ',
    description: 'Residential communities and individual households',
    image: Strategy3,
  },
  {
    title: 'Hotels and Restaurants: ',
    description: 'Hospitality sector catering to their energy needs.',
    image: Strategy4,
  },
];

export default function Strategy() {
  return (
    <div className="text-white">
      <div className="bg-[#0d0d2b] flex justify-center items-center text-center h-32 md:h-56 font-bold text-4xl md:text-6xl mb-4 md:mb-8">
        Our Target Market
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        {strategies.map((strategy) => (
          <div
            key={strategy.title}
            className="p-5 text-3xl text-center relative bg-cover bg-center h-64 md:h-96 flex items-end justify-center"
            style={{ backgroundImage: `url('${strategy.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 mb-5">
              <p className="font-bold">{strategy.title}</p>
              <p className="text-lg mt-2">{strategy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
