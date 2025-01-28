"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import BlockRendererClient from "../wsgyStrapi"

interface FAQItem {
  question: string
  answer: any
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es React?",
    answer:
      "React es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y manejar eficientemente el estado de la aplicación.",
  },
  {
    question: "¿Qué es Tailwind CSS?",
    answer:
      "Tailwind CSS es un framework de CSS utilitario que permite construir diseños personalizados rápidamente utilizando clases predefinidas.",
  },
  {
    question: "¿Qué es Next.js?",
    answer:
      "Next.js es un framework de React que ofrece renderizado del lado del servidor, generación de sitios estáticos y más características para crear aplicaciones web escalables.",
  },
  {
    question: "¿Qué es Framer Motion?",
    answer:
      "Framer Motion es una biblioteca de animaciones para React que facilita la creación de animaciones fluidas y complejas en componentes React.",
  },
]

const FAQItem = ({ item, isOpen, toggleOpen }: { item: FAQItem; isOpen: boolean; toggleOpen: () => void }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="h-[70px] flex flex-row w-full items-center justify-center py-4 text-left text-lg font-medium focus:outline-none hover:bg-gray-50 transition-colors duration-200"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
        <div className="w-[85%] flex flex-row justify-between">
        <span className="text-[#9E4848]">{item.question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <ChevronDown className="h-6 w-6 text-yellow-500" />
      </motion.div>
        </div>
      
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          className="p-4 text-[#9E4848]"
          variants={{
            open: { opacity: 1, height: "auto", marginBottom: 16 },
            collapsed: { opacity: 0, height: 0, marginBottom: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
            <BlockRendererClient content={item.answer}/>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export default function FAQSection({faqs}:{faqs:FAQItem[]}) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]))
  }

  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} isOpen={openItems.includes(index)} toggleOpen={() => toggleItem(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}