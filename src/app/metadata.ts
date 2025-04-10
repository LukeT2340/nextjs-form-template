import config from "./app.config"

export const siteMetadata = {
  title: config.immersiveTitle,
  themeColor: config.themeColor,
  icons: {
    icon: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/favicon.ico",
    shortcut:
      "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/favicon.ico",
    apple: [
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-4.png",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-57x57-4.png",
        sizes: "57x57",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-72x72-4.png",
        sizes: "72x72",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-76x76-4.png",
        sizes: "76x76",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-114x114-4.png",
        sizes: "114x114",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-120x120-4.png",
        sizes: "120x120",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-144x144-4.png",
        sizes: "144x144",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-152x152-4.png",
        sizes: "152x152",
      },
      {
        url: "https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-180x180-4.png",
        sizes: "180x180",
      },
    ],
  },
  alternates: {
    canonical: config.canonical,
  },
  openGraph: {
    url: config.canonical,
    images: [
      {
        url: config.socialShareImage,
        secureUrl: config.socialShareImage,
        width: 1920,
        height: 1080,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    images: [config.socialShareImage],
  },
  other: {
    "og:title": config.immersiveTitle,
    "og:description": config.immersiveDescription,
    "og:site_name": config.masthead.toUpperCase(),
    masthead: config.masthead,
  },
}
