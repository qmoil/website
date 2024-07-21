import Target from '../assets/Target-01.svg';

interface IBulletPointProps {
  title: string;
  points: { mainPoint: string; secondaryPoint: string }[];
}

const BulletPoint = ({ title, points }: IBulletPointProps) => {
  return (
    <div className="bg-[#EAEAF0] text-[#0C0C0C] flex flex-col md:flex-row justify-between md:mx-8 p-6 sm:p-10 pt-10 sm:pt-20 mb-8 border border-b">
      <div className="md:w-1/5 mb-4 lg:mb-0 xs:flex xs:justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          {title}
        </h1>
      </div>
      <div className="hidden md:w-3/5 font-thin md:flex flex-col gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex gap-6">
            <span>
              <img
                src={Target}
                alt="Bullet point icon"
                className="inline w-9 h-9"
              />
            </span>
            <p>
              <strong className="font-bold">{point.mainPoint}</strong>
              {point.secondaryPoint}
            </p>
          </div>
        ))}
      </div>

      <div className="m-auto md:hidden text-center font-thin flex flex-col gap-4">
        {points.map((point, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>
              <img
                src={Target}
                alt="Bullet point icon"
                className="w-9 h-9 m-2"
              />
            </span>
            <strong className="font-bold">{point.mainPoint}</strong>
            <p>{point.secondaryPoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletPoint;
