import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TableInputInterface {
  form: UseFormReturn<any>;
  name: string;
  type?: string;
  isDisabled?: boolean;
}

export default function TableInput({
  form,
  name,
  type = "text",
  isDisabled = false,
}: TableInputInterface) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              className="!w-full"
              type={type}
              placeholder="내용을 입력해주세요."
              disabled={isDisabled}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
