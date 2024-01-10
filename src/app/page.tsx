import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import HomePage from '@/pages/home'
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css"
import { UserWrapper } from '@/context/context'

export default function Home() {
  const cookie = cookies().get("token")
  console.log('hereeee')
  if (!cookie) return redirect("/auth/signin")
  return (
    <UserWrapper>
      <HomePage />
    </UserWrapper>
  )

}
