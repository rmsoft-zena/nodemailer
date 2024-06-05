import React from "react";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface TableTextareaInterface {
  form: UseFormReturn<any>;
  name: string;
  isDisabled?: boolean;
}

export default function TableTextarea({
  form,
  name,
  isDisabled,
}: TableTextareaInterface) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              className="!w-full resize-none"
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
