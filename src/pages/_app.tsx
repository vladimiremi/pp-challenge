import "../styles/global.ts";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "styles/global";
import { BaseLayout } from "layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <BaseLayout>
        <Component {...pageProps} />
        <GlobalStyle />
      </BaseLayout>
    </ChakraProvider>
  );
}

export default MyApp;
