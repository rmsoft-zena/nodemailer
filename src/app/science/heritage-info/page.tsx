"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TableMain from "@/components/table/Main";
import {
  componentDefaultValue,
  componentFormSchema,
  heritageDefaultValue,
  heritageFormSchema,
} from "./schema";
import { HeritageInfoData } from "./data";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeritageInfoPage() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState("item");
  const heritageForm = useForm<z.infer<typeof heritageFormSchema>>({
    defaultValues: heritageDefaultValue,
    resolver: zodResolver(heritageFormSchema),
  });
  const componentForm = useForm<z.infer<typeof componentFormSchema>>({
    defaultValues: componentDefaultValue,
    resolver: zodResolver(componentFormSchema),
  });
  const form = tabValue === "item" ? heritageForm : componentForm;
  const { data, componentData } = HeritageInfoData({ form });
  const onSubmit = (value: z.infer<typeof heritageFormSchema>) => {
    console.log(value);
  };

  return (
    <div className="px-10 py-4 w-full h-full overflow-x-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="h-10 flex justify-between items-center px-4 border w-full bg-gray-200">
            <p className="font-semibold text-black text-sm">
              국가유산 정보 (아이템)
            </p>
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
          <Tabs
            defaultValue={tabValue}
            onValueChange={setTabValue}
            className="w-full"
          >
            <TabsList className="py-0 px-4 rounded-none w-full justify-start gap-4 bg-[#F8FAFC] border-x">
              <TabsTrigger
                value="item"
                className="data-[state=active]:text-primary pb-[4px] border-transparent border-b-[2px] h-full data-[state=active]:border-primary rounded-none px-0 data-[state=active]:bg-inherit data-[state=active]:shadow-none text-gray-900 font-semibold"
              >
                국가유산 정보 (아이템)
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-primary pb-[4px] border-transparent border-b-[2px] h-full data-[state=active]:border-primary rounded-none px-0 data-[state=active]:bg-inherit data-[state=active]:shadow-none text-gray-900 font-semibold"
                value="component"
              >
                컴포넌트 정보
              </TabsTrigger>
            </TabsList>
            <TabsContent className="mt-0" value="item">
              <TableMain data={data} />
            </TabsContent>
            <TabsContent className="mt-0" value="component">
              <TableMain data={componentData} />
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}
