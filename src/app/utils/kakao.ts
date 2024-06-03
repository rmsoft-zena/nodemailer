export function loadKakaoSdk(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.Kakao) {
      console.log("Kakao SDK already loaded");
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("03fa77b2837fe09cbbeb390153133038");
        console.log("Kakao SDK initialized");
        resolve();
      } else {
        reject(new Error("Kakao SDK failed to load"));
      }
    };

    script.onerror = () => {
      reject(new Error("Kakao SDK failed to load"));
    };

    console.log("Appending Kakao SDK script");
    document.head.appendChild(script);
  });
}
