import { NextResponse } from "next/server";
import axios from "axios";
import { MOODLE_SERVERS_URL, MOODLE_API_TOKEN } from "@/constants";


export async function POST(request) {
  const body = await request.json()

  const res = await fetch(MOODLE_SERVERS_URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "api-token": MOODLE_API_TOKEN
    }
  })

  const data = await res.json()
  return NextResponse.json(data)
}