export const POST = async (req: Request) => {
  return new Response(
    JSON.stringify({
      code: 100,
      message: null,
      data: {
        originalFilename: "images.jpg",
        fileUrl:
          "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnb97trxvnun/b/clive-dev-resource-2024/o/image/20240605/64b4114c-0faf-4c24-9fc1-076e431a441d.jpg",
        fileSize: 4.1162109375,
      },
    })
  );
};
