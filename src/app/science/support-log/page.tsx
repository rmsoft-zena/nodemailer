"use client";

import React, { useState, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SupportLogData } from "./data";
import TableMain from "@/components/table/Main";
import { supportLogDefaultValue, supportLogFormSchema } from "./schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

export default function HeritageInfoPage() {
  const [isMount, setIsMount] = useState(false);
  const form = useForm<z.infer<typeof supportLogFormSchema>>({
    resolver: zodResolver(supportLogFormSchema),
    defaultValues: supportLogDefaultValue,
  });

  const data = SupportLogData({ form });

  const onSubmit = () => {};

  useEffect(() => setIsMount(true), []);

  return (
    <div className="px-10 py-4 w-full h-full overflow-x-auto">
      {isMount && (
        <>
          <div className="h-10 flex justify-between items-center px-4 border w-full bg-gray-200">
            <p className="font-semibold text-black text-sm">활용정보</p>
            <div className="flex items-center gap-1 py-1">
              <Button
                variant={"outline"}
                className="px-4 py-2 border-primary text-primary"
              >
                임시저장
              </Button>
              <Button className="px-4 py-2">완료</Button>
            </div>
          </div>
          <p className="h-10 w-full font-medium px-4 border-x flex items-center text-sm bg-[#F8FAFC]">
            분류
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TableMain data={data} />
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
