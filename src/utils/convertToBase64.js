export const convertFileToBase64 = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert file to base64 string."));
      }
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
