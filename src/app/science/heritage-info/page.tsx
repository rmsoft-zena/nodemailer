"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeritageInfoPage() {
  return (
    <div className="px-10 py-4 w-scree h-full overflow-x-auto">
      <Tabs className="w-[91.1875rem]" defaultValue="heritage">
        <div className="h-10 flex justify-between items-center px-4 border">
          <p>국가유산 정보 (아이템)</p>
          <div className="flex items-center gap-1">
            <Button
              variant={"secondary"}
              className="flex items-center gap-1 px-4 py-2"
            >
              <Plus size={16} />
              <p>컴포넌트 추가</p>
            </Button>
            <Button variant={"secondary"} className="px-4 py-2">
              임시저장
            </Button>
            <Button className="px-4 py-2">완료</Button>
          </div>
        </div>
        <TabsList className="w-full h-10 bg-white rounded-none justify-start gap-4 border-x border-b px-4 py-0">
          <TabsTrigger
            className="bg-white rounded-none h-full border-b-[2px] border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 w-fit px-0 py-[0.62rem]"
            value="heritage"
          >
            국가유산 정보 (아이템)
          </TabsTrigger>
          <TabsTrigger
            className="bg-white rounded-none h-full border-b-[2px] border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 w-fit px-0 py-[0.62rem]"
            value="component"
          >
            컴포넌트 정보
          </TabsTrigger>
        </TabsList>
        <TabsContent value="heritage" className="m-0">
          <Table>
            <TableBody>
              <TableRow className="!border-[1px] !border-t-0">
                <TableCell className="w-[14.375rem] bg-gray-50">
                  메타데이터 항목명
                </TableCell>
                <TableCell>
                  <Input
                    disabled
                    value={"대한식소총"}
                    className="h-full p-2 rounded-none w-full"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="component">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$222.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
