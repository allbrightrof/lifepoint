'use client'
import { useState } from "react";
import Believe from "@/components/Belif/Believe";
import { beliefDetails } from "@/data/features";

const BelievePar = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 p-4">
      {beliefDetails.map((item) => (
        <Believe
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={activeId === item.id}
          onClick={() =>
            setActiveId(activeId === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
};

export default BelievePar;