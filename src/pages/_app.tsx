import { AppProps } from "next/app";
import usePageView from "@/hooks/usePageView";
import { GlobalStyle } from "@/styles/globals";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
