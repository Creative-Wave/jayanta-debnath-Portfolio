"use client";

import { useState } from "react";
import { X } from "lucide-react";

const graphciprojects = [
  { id: 1, src: "graphic (1).jpg", alt: "Graphic Project 1" },
  { id: 2, src: "graphic (2).jpg", alt: "Graphic Project 2" },
  { id: 3, src: "graphic (3).jpg", alt: "Graphic Project 3" },
  { id: 4, src: "graphic (4).jpg", alt: "Graphic Project 4" },
  { id: 5, src: "graphic (7).jpg", alt: "Graphic Project 5" },
  { id: 6, src: "graphic (6).jpg", alt: "Graphic Project 6" },
];

const Graphic = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClose = () => setSelectedImage(null);

  return (
    <div className="min-h-auto px-4 py-10 text-white">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {graphciprojects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(project.src)}
          >
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-72 object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-fuchsia-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
              onClick={handleClose}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged graphic project"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphic;
