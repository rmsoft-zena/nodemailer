"use client";

import { useRouter } from "next/navigation";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TableMain from "@/components/table/Main";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { heritageDefaultValue, heritageFormSchema } from "./schema";
import { HeritageInfoData } from "./data";

export default function HeritageInfoPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof heritageFormSchema>>({
    defaultValues: heritageDefaultValue,
    resolver: zodResolver(heritageFormSchema),
  });
  const data = HeritageInfoData({ form });
  const onSubmit = (value: z.infer<typeof heritageFormSchema>) => {
    console.log(value);
  };

  return (
    <div className="px-10 py-4 w-full h-full overflow-x-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="h-10 flex justify-between items-center px-4 border w-full bg-gray-200">
            <p className="font-semibold text-black text-sm">활용정보</p>
            <div className="flex items-center gap-1 py-1">
              <Button
                type="submit"
                variant={"outline"}
                className="px-4 py-2 border-primary text-primary"
              >
                임시저장
              </Button>
              <Button
                className="px-4 py-2"
                type="submit"
                onClick={() => router.push("/science/support-log")}
              >
                완료
              </Button>
            </div>
          </div>
          <p className="h-10 w-full font-medium px-4 border-x flex items-center text-sm bg-[#F8FAFC]">
            분류
          </p>

          <TableMain data={data} />
        </form>
      </Form>
    </div>
  );
}
