"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

interface SortableImageProps {
  id: string;
  src: string;
}

export default function SortableImage({ id, src }: SortableImageProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab"
    >
      <Image
        src={src}
        width={300}
        height={300}
        alt="Sortable Image"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}
