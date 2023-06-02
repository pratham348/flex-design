/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
 return (
  <Html lang="en">
   <Head>
    <link
     href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
     rel="stylesheet"
    />
    <link
     rel="stylesheet"
     type="text/css"
     charset="UTF-8"
     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
     rel="stylesheet"
     type="text/css"
     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
   </Head>
   <body className="bg-Gray-050">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" />

    <Main />
    <NextScript />
   </body>
  </Html>
 )
}
