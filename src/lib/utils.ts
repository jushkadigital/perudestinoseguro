import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function* zip<T extends any[][]>(...args: T) {
    for (let i = 0; i < Math.min(...args.map((e) => { return e.length })); ++i) {
        yield args.map((e) => { return e[i]; }) as
            { [I in keyof T]: T[I][number] };
    }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function encodeData(data:any) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
} 
 const API_URL = "https://vps.perudestinoseguro.com/api/"

 export const APIBACK = "https://vps.perudestinoseguro.com"

export async function myFetch(url:string, urlParams = {}, headers = {}) {
  const token = process.env.STRAPI_TOKEN; // Reemplaza con tu token Bearer

  // Construir URL con parámetros si se proporcionan  
  const queryString = Object.keys(urlParams)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(urlParams[key])}`)
  .join('&');
  try {
    const response = await fetch(API_URL + url + "?" + queryString, {
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido
        'Authorization': `Bearer ${token}`, // Token Bearer
      },
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${API_URL + url} ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}

export function deviceOutput(input:number,mult:number,dimension:string,isMobile:boolean){
     return isMobile ? (input * mult).toString() + dimension :  (input).toString() + dimension
  }


export function DateTimeForCalendar(TIMEOFFSET:string, humanDate:string, humanTime:string) {
  // Validar el formato de TIMEOFFSET
  if (!/^[-+]\d{2}:\d{2}$/.test(TIMEOFFSET)) {
    throw new Error("TIMEOFFSET debe estar en formato ±HH:MM, por ejemplo: '+01:00' o '-05:00'");
  }

  // Validar y procesar la fecha y hora en formato humano
  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(humanDate)) {
    throw new Error("La fecha debe estar en formato 'YYYY/MM/DD'");
  }

  if (!/^\d{2}:\d{2}$/.test(humanTime)) {
    throw new Error("La hora debe estar en formato 'HH:mm'");
  }

  // Separar componentes de fecha y hora
  const [year, month, day] = humanDate.split('/').map(Number);
  const [hour, minute] = humanTime.split(':').map(Number);

  // Construir el string de fecha en formato ISO
  const newDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00.000${TIMEOFFSET}`;
  
  // Crear el objeto Date para la fecha de inicio
  const startDate = new Date(newDateTime);

  // Sumar 1 hora para obtener la fecha de fin
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

  return {
    start: startDate,
    end: endDate,
  };
}

// export function DateTimeForCalendar(TIMEOFFSET:string){
//   const date = new Date();
//   const year = date.getFullYear()
//   let month = date.getMonth() + 1
//   let monthStr = month.toString()
//   if (month < 10){
//     monthStr = `0${month}`
//   }
//   let day = date.getDate()
//   let dayStr = day.toString()
//   if (day < 10){
//     dayStr = `0${day}`
//   }
//   let hour = date.getHours()
//   let hourStr = hour.toString()
//   if (hour < 10){
//     hourStr = `0${hour}`
//   }
//   let minute = date.getMinutes()
//   let minuteStr = minute.toString()
//   if (minute < 10){
//     minuteStr = `0${minuteStr}`
//   }

//   const newDateTime = `${year}-${monthStr}-${dayStr}T${hourStr}:${minuteStr}:00.000${TIMEOFFSET}`
//   const event = new Date(Date.parse(newDateTime))
//   const startDate = event
//   const endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1))
//   return {
//     'start': startDate,
//     'end': endDate
//   }
//   
// }
