const imgToBase64 = require("image-to-base64");

export const imageToBase64 = (imgPath: string) =>
  imgToBase64(imgPath).catch((error: any) => {
    console.log("Error", error);
  });
