'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface Props {
  inclu: string[];
  exclu: string[];
}

export default function Cartita({ inclu, exclu }: Props) {
  return (
    <Card className={cn("mt-6 w-46 p-8")}>
      <CardContent>
        <h3 className={cn("text-[#808080] font-semibold mb-3")}>Incluido</h3>
        {inclu.map((ele, index) => (
          <p
            key={`inclu-${index}`}
            className={cn("lg:mb-2 font-light text-[14px] lg:text-sm")}
          >
            <CheckIcon className="w-3 inline-block" color="#D20000" /> {ele}
          </p>
        ))}
        <h3 className={cn("text-[#808080] font-semibold mb-3")}>No Incluye</h3>
        {exclu.map((ele, index) => (
          <p
            key={`exclu-${index}`}
            className={cn("lg:mb-2 font-light text-[14px] lg:text-sm")}
          >
            <XMarkIcon className="w-3 inline-block" color="#D20000" /> {ele}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
