'use client'
import { useState } from "react";
import Believe from "@/components/Belif/Believe";

const BelievePar = ({ data, variant = "dark" }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 p-4">
      {data.map((item) => (
        <Believe
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={activeId === item.id}
          variant={variant}
          onClick={() =>
            setActiveId(activeId === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
};

export default BelievePar;