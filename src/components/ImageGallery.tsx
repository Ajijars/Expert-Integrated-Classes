import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
};

export default function ImageGallery({ images, columns = 4 }: Props) {
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {images.map((img) => (
        <figure
          key={img.src + img.caption}
          className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm font-medium text-brand-800">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
