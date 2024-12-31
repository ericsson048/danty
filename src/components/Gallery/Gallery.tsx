import { GalleryItem } from './GalleryItem';
import { galleryData } from './galleryData';

export function Gallery() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Our Journey Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryData.map((item, index) => (
            <GalleryItem 
              key={index}
              imageUrl={item.imageUrl}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}