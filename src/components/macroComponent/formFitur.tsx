import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/useMobile";

interface Props {
items: string[]
}

export const FormAgenciar = ({items}:Props) => {
  
  const isMobile = useMobile()
  
  const cardHolderSchema = z.string().max(40, { message: "El nombre es muy largo" }).min(1,{message: "El campo no debe estar vacio"})
  
  return (
  <div></div>
  )

}
