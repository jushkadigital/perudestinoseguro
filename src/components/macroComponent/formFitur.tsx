'use client'
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
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
import { useEffect, useState,useRef } from "react"
import { useMobile } from "@/hooks/useMobile";
import { Button } from '@/components/ui/button';
import { PopupWidget } from "react-calendly";
import { Textarea } from '../ui/textarea';
import CalendlyEmbed from "@/components/calendly";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslation } from '../../../i18next/client'

const termsAndCondition = 'aoeaoeaoeaoe'


interface Props {
  lng: string
}
export const FormAgenciar = ({lng}:Props) => {

  const isMobile = useMobile()

  const {t} = useTranslation(lng,'fitur')
  const gerenteNameSchema = z.string().max(70, { message: "El nombre es muy largo" }).min(1, { message: "El campo no debe estar vacio" })

  const prefixCountrySchema = z.string().regex(/^\+\d+$/, {
    message: "Debe ser un prefijo válido, e.g., +1, +52",
  })

  const phoneNumberSchema = z.string().regex(/^\d{7,15}$/, {
    message: "Debe ser un número válido entre 7 y 15 dígitos",
  })


  const emailSchema = z
    .string()
    .email("Debe ser un correo electrónico válido").min(1, { message: "El campo no debe estar vacio" })


  const aditionalMessage = z.string().min(1, {
    message: "Debe tener al menos 1 caracteres",
  })

  const termsAndConditionSchema = z.boolean().refine((val) => val, {
    message: "Debes aceptar los términos y condiciones.",
  })

  const formMeetSchema = z.object({
    method: z.literal("formMeet"),
    gerenteName: gerenteNameSchema,
    prefix: prefixCountrySchema,
    phoneNumber: phoneNumberSchema,
    email: emailSchema,
    aditional: aditionalMessage,
    termsAndCondition: termsAndConditionSchema
  });

  const form = useForm<z.infer<typeof formMeetSchema>>({
    resolver: zodResolver(formMeetSchema),
    defaultValues: {
      method: "formMeet",
      gerenteName: "",
      prefix: "",
      phoneNumber: "",
      email: "",
      aditional: "",
      termsAndCondition: false
    },

  })

  const [dialogOpen, setDialogOpen] = useState(false)
  
  async function onSubmit(values: z.infer<typeof formMeetSchema>) {
    console.log(values)
    console.log("aaa")
  }


  const handlePayment = async () => {

    try {
      // Simula el procesamiento del pago


      // Si el pago es exitoso


    } catch (error) {
      // Si ocurre un error en el pago
    }
  };

  const timestamp = Date.now();
const currentDate = new Date(timestamp);

// const handleRes = async ()=>{
// const response = await fetch(`/api/meet`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({date: currentDate.toLocaleDateString(),time:currentDate.toLocaleTimeString(),email: "job@gmail.com" }),
//       })
// }
    


 const widgetContainerRef = useRef(null);
 console.log(widgetContainerRef)
  return (
      <div className=" h-full flex justify-center flex-col">
        <Form {...form} >
          <form id="formPDS" onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 lg:space-y-3 bg-white p-10 text-xs lg:text-base  mx-auto  shadow-lg  overflow-hidden flex flex-col justify-center items-center">
            <div className="w-full">
              <FormField
                control={form.control}
                name="gerenteName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">{t('form.managerNameTitle')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.managerNamePlaceholder')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}

              />
            </div>
            <div className="w-full flex flex-row ">
            <div>
              <FormField
                control={form.control}
                name="prefix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.countryPrefixTitle')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.countryPrefixPlaceholder')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              </div>
              <div>
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.phoneNumberTitle')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.phoneNumberTitlePlaceholder')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              </div>

            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Email </FormLabel>
                    <FormControl>
                      <Input placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
                          </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="aditional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('form.suggestionsTitle')}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t('form.suggestionsPlaceholder')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
                          </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="termsAndCondition"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{t('form.termsAndConditionsTitle')}</FormLabel>
                      <FormDescription>
                         {t('form.termsAndConditionsParagraph')}<br />
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="link" className="p-0 h-auto text-sm">{t('form.termsAndConditionsButton')}</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{t('form.termsAndConditionsTitle')}</DialogTitle>
                              <DialogDescription dangerouslySetInnerHTML={{ __html: termsAndCondition }} className="tourQWERTY  overflow-y-auto  h-[75vh] text-justify">
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <div className="inline-widget">
      <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{t('form.scheduleMeet')}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] h-[500px]">
              <CalendlyEmbed url="https://calendly.com/vacacionesperu/formulario-fitur?month=2025-01"/>
      </PopoverContent>
    </Popover>
             </div>
            </div>
            <div className="w-full space-y-2 lg:space-y-4">
              </div>             
            
      <Button type="submit"  className="w-full max-w-[750px] py-2 text-lg font-bold bg-[#4a0700]" >{t('form.sendForm')}</Button>
          </form>
        </Form>

      </div>
  )

}
