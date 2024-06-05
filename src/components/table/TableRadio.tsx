import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TableRadioInterface {
  form: UseFormReturn<any>;
  name: string;
  labelData: { Y: string; N: string };
}

export default function TableRadio({
  form,
  name,
  labelData,
}: TableRadioInterface) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="text-xs"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Y" id="Y" />
                <Label htmlFor="Y">{labelData.Y}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="N" id="N" />
                <Label htmlFor="N">{labelData.N}</Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
