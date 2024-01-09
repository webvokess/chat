import type { AppProps } from 'next/app'
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { UserWrapper } from '@/context/context'



export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserWrapper>
            <Component {...pageProps} />
        </UserWrapper>
    );
}