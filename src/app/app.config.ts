type Config = {
  allowMultipleSubmissions: boolean;
  closeDate: Date;
  immersiveTitle: string;
  immersiveDescription: string;
  canonical: string;
  socialShareImage: string;
  masthead: string;
  themeColor: string;
};

const config: Config = {
  allowMultipleSubmissions: false,
  closeDate: new Date("2025-04-17T17:00:00+10:00"),
  immersiveTitle: "BRAND - HEADING - SUBHEADING - MASTHEAD",
  immersiveDescription: "IMMERSIVE DESCRIPTION",
  canonical: "https://brandedcontent.smh.com.au/brand/heading",
  socialShareImage:
    "https://brandedcontent.smh.com.au/inc/social/SOCIAL-SHARE-IMAGE.JPG",
  masthead: "smh",
  themeColor: "#0A1633",
};

export default config;
