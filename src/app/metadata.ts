import config from "./app.config"

export const siteMetadata = {
  title: config.immersiveTitle,
  themeColor: config.themeColor,
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
