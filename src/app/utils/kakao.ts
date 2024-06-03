export function loadKakaoSdk(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.Kakao) {
      resolve();
      return;
    }

    /**
     * next.js에서는 <head>태그를 직접 수정하지 않는다.
     * SEO 및 페이지 최적화 측면에서 권장되지 않는다.
     */
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    /**
     * script.async
     * 브라우저가 HTML을 파싱하다가 async를 확인하고
     * 병렬로 다운로드를 명령만 해놓고 다시 파싱을 하고
     * 파일이 다운로드되면 그때 파싱을 멈추고 다운로드된 파일을 실행하게 된다.
     * 이후 실행을 다하고 나서 나머지 HTML을 파싱하게 된다.*/
    script.async = true;

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("03fa77b2837fe09cbbeb390153133038");
        resolve();
      } else {
        reject(new Error("Kakao SDK failed to load"));
      }
    };

    script.onerror = () => {
      reject(new Error("Kakao SDK failed to load"));
    };

    document.head.appendChild(script);
  });
}
