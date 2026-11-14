import { Link } from "react-router-dom";

export default function ProductCard({ product, compact = false }) {
  const image = compact && product.featuredImage ? product.featuredImage : product.image;

  return (
    <Link to={`/inquire?piece=${encodeURIComponent(product.name)}`} className="group">
      <div className="overflow-hidden rounded-[1.6rem] bg-sand">
        <img
          src={image}
          alt={product.alt}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl">{product.name}</h3>
        <span className="shrink-0 text-sm text-mute">{product.price}</span>
      </div>
      <p className="text-sm text-mute">{compact ? product.short : product.finish}</p>
    </Link>
  );
}
