import { NextRequest, NextResponse } from 'next/server'
import requestIp from 'request-ip'

const ips = ['176.150.154.1', '185.205.108.171', '51.154.162.73', undefined]

export function middleware(req) {
  NextResponse.next()
  return

  NextResponse.redirect('https://www.tomoegozen.io')
  return
}
