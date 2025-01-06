'use client'
import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface miniProps {
  question: string
  answer: string
  paquete: boolean
}

function CollapseDefault({ question, answer, paquete }: miniProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="w-full items-center  !justify-start">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className={`lowercase capitalize  ${paquete ? "rounded-lg" : "rounded-none"} ${paquete ? "font-bold" : "font-normal"} py-4 ${paquete ? "text-lg" : "text-md"} text-left w-full ${paquete ? "text-gray-600" : "text-gray-900"} flex justify-start ${paquete ? "bg-gray-200" : "bg-white"}`}>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

interface Props {
  questionAnswer: { question: string, answer: string }[]
  paquete?: boolean
}

export default function QuestionsSalida({ questionAnswer, paquete = false }: Props) {

  return (
    <div className={`flex flex-col items-center ${paquete ? "gap-y-5" : ""}`}>
      {questionAnswer.map(ele => (<CollapseDefault question={ele.question} answer={ele.answer} paquete={paquete} />))}
    </div>
  )
}
