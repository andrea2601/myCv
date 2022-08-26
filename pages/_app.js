import '../styles/globals.css'
import Provider from "../Context/Provider"


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>

  );
}

export default MyApp
