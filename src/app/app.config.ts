type AppConfig = {
  allowMultipleSubmissions: boolean;
  closeDate: Date;
  immersiveTitle: string;
  immersiveDescription: string;
  canonical: string;
  socialShareImage: string;
  masthead: string;
  themeColor: string;
};

const config: AppConfig = {
  allowMultipleSubmissions: false,
  closeDate: new Date("2025-04-17T17:00:00+10:00"),
  immersiveTitle: "BRAND - HEADING - SUBHEADING - MASTHEAD",
  immersiveDescription: "IMMERSIVE DESCRIPTION",
  canonical: "https://live-native-paid-content.pantheonsite.io/brand/heading",
  socialShareImage:
    "https://live-native-paid-content.pantheonsite.io/inc/social/SOCIAL-SHARE-IMAGE.JPG",
  masthead: "wwos",
  themeColor: "#0A1633",
};

export default config;
