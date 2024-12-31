
interface GalleryItemProps {
  imageUrl: string;
  quote: string;
}

export function GalleryItem({ imageUrl, quote }: GalleryItemProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={imageUrl} 
        alt="Romantic moment" 
        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <p className="text-white p-6 text-lg italic font-light">
          {quote}
        </p>
      </div>
    </div>
  );
}