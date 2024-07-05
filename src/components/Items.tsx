interface ItemsProps {
  title: string;
  description: string;
  image: string;
}

export default function Items({ title, description, image }: ItemsProps) {
  return (
    <div>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
