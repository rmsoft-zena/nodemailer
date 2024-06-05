import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectItem {
  value: any;
  label: string;
}

interface TableSelectInterface {
  form: UseFormReturn<any>;
  name: string;
  defaultItem: SelectItem;
  selectList: Array<SelectItem>;
}

export default function TableSelect({
  form,
  name,
  selectList,
}: TableSelectInterface) {
  const label = (selected: string) =>
    selectList?.find(({ value }: { value: string }) => value == selected)
      ?.label ?? "";

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select
            value={field.value}
            onValueChange={(value) => {
              field.onChange(value);
            }}
          >
            <SelectTrigger
              className={`w-full h-[1.875rem] text-xs ${
                field.value ? "text-[#0A0A0A]" : "text-[#999]"
              }`}
            >
              <SelectValue placeholder="내용을 입력해주세요.">
                {label(field.value)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {selectList?.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
