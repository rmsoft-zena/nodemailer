"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PreventBackPage() {
  const router = useRouter();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  /** 새로고침 이벤트 */
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (!isButtonClicked) {
      window.addEventListener("beforeunload", preventClose);

      return () => {
        window.removeEventListener("beforeunload", preventClose);
      };
    }
  }, [isButtonClicked]);

  const onClickHandler = () => {
    setIsButtonClicked(true);
    router.push("/kakao-share");
  };

  return (
    <>
      <Button onClick={onClickHandler}>prevent-back</Button>
    </>
  );
}
