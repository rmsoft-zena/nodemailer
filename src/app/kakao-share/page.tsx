"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { loadKakaoSdk } from "../utils/kakao";

export default function KakaoSharePage() {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    loadKakaoSdk().then(() => setKakaoLoaded(true));
  }, []);

  const shareKakao = () => {
    if (!kakaoLoaded || !window.Kakao) {
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "제목",
        description: "설명",
        imageUrl: "https://your.image.url/here.jpg",
        link: {
          mobileWebUrl: "https://your.website.url",
          webUrl: "https://your.website.url",
        },
      },
      buttons: [
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "https://your.website.url",
            webUrl: "https://your.website.url",
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} disabled={!kakaoLoaded}>
      카카오톡 공유하기
    </Button>
  );
}
