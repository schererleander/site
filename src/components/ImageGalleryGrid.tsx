import React, { useState, useEffect } from 'react';

interface Props {
  images: Array<{
    src: string;
    alt?: string;
    id?: string | number;
  }>;
}

export default function ImageGalleryGrid({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') {
        closeModal;
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev && prev > 0 ? prev - 1 : prev));
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : prev
        );
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="grid gap-2 grid-cols-4 p-4">
        {images.map((image, idx) => (
          <div
            key={image.id ?? image.src}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={image.src}
              alt={image.alt || 'Gallery image'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Prev arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 text-black dark:text-white text-4xl focus:outline-none cursor-pointer"
            disabled={selectedIndex === 0}
          >
            &#8592;
          </button>

          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt || 'Enlarged gallery'}
            className="w-1/2 h-1/2 object-contain rounded-lg"
          />

          {/* Next arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 text-black dark:text-white text-4xl focus:outline-none cursor-pointer"
            disabled={selectedIndex === images.length - 1}
          >
            &#8594;
          </button>
        </div>
      )}
    </>
  );
}