import type { AppProps } from "next/app";
import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
