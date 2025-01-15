import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
