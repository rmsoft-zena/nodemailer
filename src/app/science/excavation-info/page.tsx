"use client";

import { useRouter } from "next/navigation";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TableMain from "@/components/table/Main";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ExcavationInfoData } from "./data";
import { excavationInfoDefaultValue, excavationInfoSchema } from "./schema";
import { ChevronRight } from "lucide-react";

export default function ExcavationInfoPage() {
  const form = useForm<z.infer<typeof excavationInfoSchema>>({
    resolver: zodResolver(excavationInfoSchema),
    defaultValues: excavationInfoDefaultValue,
  });
  const { infoData, relatedReportData } = ExcavationInfoData({ form });
  const router = useRouter();

  const onSubmit = (value: z.infer<typeof excavationInfoSchema>) => {
    console.log(value);
  };

  return (
    <div className="px-10 py-4 w-full h-full overflow-x-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="h-10 flex justify-between items-center px-4 border w-full bg-gray-200">
            <p className="font-semibold text-black text-sm">발굴정보</p>
            <div className="flex items-center gap-1 py-1">
              <Button
                type="submit"
                variant={"outline"}
                className="px-4 py-2 border-primary text-primary"
              >
                임시저장
              </Button>
              <Button
                className="px-4 py-2 flex items-center gap-[0.25rem]"
                type="submit"
                onClick={() => router.push("/science/support-log")}
              >
                다음
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <p className="h-10 w-full font-medium px-4 border-x flex items-center text-sm bg-[#F8FAFC]">
            기본정보
          </p>
          <TableMain data={infoData} />
          <p className="h-10 w-full font-medium px-4 border-x flex items-center text-sm bg-[#F8FAFC]">
            관련보고서
          </p>
          <TableMain data={relatedReportData} />
        </form>
      </Form>
    </div>
  );
}
