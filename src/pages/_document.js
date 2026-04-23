import AOSInit from "@/components/aos-animation/AOSInit";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AOSInit/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
