"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";

interface TableDatePickerInterface {
  form: UseFormReturn<any>;
  name: string;
}

export default function TableDatePicker({
  form,
  name,
}: TableDatePickerInterface) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[8.75rem] p-2 justify-between text-left font-normal h-[2rem] text-xs",
                    field.value ? "text-[#0A0A0A]" : "text-[#999]"
                  )}
                >
                  {field.value ? (
                    format(field.value, "yyyy-MM-dd")
                  ) : (
                    <span>yyyy-mm-dd</span>
                  )}
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
