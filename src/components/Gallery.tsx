import React, { useState, useEffect } from 'react';

interface ImageItems {
  images: Array<{
    src: string;
    alt?: string;
    id?: string | number;
  }>;
}

export default function Gallery({ images }: ImageItems) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeModal = () => setSelectedIndex(null);
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.key === 'ArrowRight') {
        next();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="grid gap-2 grid-cols-4 max-sm:grid-cols-3 p-4">
        {images.map((image, idx) => (
          <button
            key={image.id ?? image.src}
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square group cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={image.src}
              alt={image.alt || 'Gallery image'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
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
            onClick={prev}
            className="absolute left-4 text-black dark:text-white text-4xl disabled:opacity-30"
            disabled={selectedIndex === 0}
          >
            &#8592;
          </button>

          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt || 'Enlarged gallery'}
            className="w-2/3 h-2/3 object-contain rounded-lg"
          />

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-4 text-black dark:text-white text-4xl disabled:opacity-30"
            disabled={selectedIndex === images.length - 1}
            aria-label='Next image'
          >
            &#8594;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-4 text-black dark:text-white text-3xl"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
