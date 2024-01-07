import Image from 'next/image'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Home from '@/pages/home'

export default function HomePage() {
  const cookie = cookies().get("token")
  if (!cookie) return redirect("/auth/signin")
  return <Home />
}
