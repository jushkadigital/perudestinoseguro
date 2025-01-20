import qs from "qs"
import fetch from "node-fetch"
import { google } from 'googleapis';
import { v4 as uuidv4 } from 'uuid';

import { NextRequest, NextResponse } from "next/server";
import { DateTimeForCalendar } from "@/lib/utils";

export async function POST(request: NextRequest) {

  const document = await request.json();

  const { date, time, email } = document

  console.log(document)


  const auth = new google.auth.JWT(
    process.env.CALENDAR_CLIENT_EMAIL,
    undefined,
    process.env.CALENDAR_PRIVATE_KEY!.replaceAll("\\n", "\n"),
    ['https://www.googleapis.com/auth/calendar'] // Permisos necesarios
  );

  // console.log(jwtClient)
  //    await jwtClient.authorize();

  const calendar = google.calendar({ version: 'v3' });
  console.log("llegeg")
  const summary = "aoe"
  console.log("GAAA")
  const calendarId = "team.pdsviajes@gmail.com"
  const insertEvent = async (event) => {
    try {

      const ss = await calendar.calendarList.list({
        auth: auth
      })
      
      console.log(ss)
      const response = await calendar.events.insert({
        auth: auth,
        calendarId: calendarId,
        resource: event,
        conferenceDataVersion: 1,
      })

      if (response['status'] == 200 && response['statusText'] == 'OK') {
        console.log(response)
        return "Event inserted successfully"
      } else {
        return "Failed to insert Event"
      }
    }
    catch (error) {
      console.log(error)
    }

  }
  // const response = await calendar.events.insert({
  //   calendarId: 'primary', // ID de tu calendario (por defecto, "primary")
  //   resource: resource,
  //   conferenceDataVersion: 1,
  // });

  const TIMEOFFSET = "-05:00"

  let dateTime = DateTimeForCalendar(TIMEOFFSET, "2025/01/16", "11:35")

  let event = {
    'summary': `this is sumary`,
    'description': `this is the description`,
    'start': {
      'dateTime': dateTime['start'],
      'timeZone': 'America/Lima'
    },
    'end': {
      'dateTime': dateTime['end'],
      'timeZone': 'America/Lima'
    },
    conferenceData: {
    createRequest: {
      conferenceSolutionKey: {
        // type: "googleMeet", // Tipo válido
        // type: "eventNamedHangout", // Tipo válido
      },
      requestId: `${uuidv4()}`, // ID único
    },
  },
   entryPoints: [
        {
          entryPointType: "video",
        },
      ],
  }

  try {
    const res = await insertEvent(event)
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return new Response(`Revalidate`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
