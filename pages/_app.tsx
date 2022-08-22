import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy'
import store from '../util/store'

function MyApp(props: any) {
  const Component: any = props.Component;
  const pageProps: any = props.pageProps;
  const Provider: any = StoreProvider; // TODO: TS needs fixing here, just used type any to be able to deploy with Vercel

  return(
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
