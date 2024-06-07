export const uploadFile = async (req: any) => {
  const response = await fetch("/api/fileUpload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  return await response?.json();
};
