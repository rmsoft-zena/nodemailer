import * as z from "zod";

export const heritageFormSchema = z.object({
  code: z.string().optional(),
  name: z.string().optional(),
  keyword: z.string().optional(),
  product_system: z.string().optional(),
  dept: z.string().optional(),
  personal_name: z.string().optional(),
  position: z.string().optional(),
  product_date: z.string().optional(),
  enroll_date: z.string().optional(),
  file_cnt: z.union([z.string(), z.number()]).optional(),
  preserve_period: z.string().optional(),
  preserve_reason: z.string().optional(),
  preserve_category: z.string().optional(),
  preserve_date: z.string().optional(),
  preserver: z.string().optional(),
  modify_date: z.string().optional(),
  modify_item: z.string().optional(),
  modify_pre_value: z.string().optional(),
  modifier: z.string().optional(),
  manage_category: z.string().optional(),
  manage_description: z.string().optional(),
  manage_date: z.string().optional(),
  manager_name: z.string().optional(),
});

export const heritageDefaultValue: z.infer<typeof heritageFormSchema> = {
  code: "",
  name: "",
  keyword: "",
  product_system: "",
  dept: "",
  personal_name: "",
  position: "",
  product_date: "",
  enroll_date: "",
  file_cnt: "",
  preserve_period: "",
  preserve_reason: "",
  preserve_category: "",
  preserve_date: "",
  preserver: "",
  modify_date: "",
  modify_item: "",
  modify_pre_value: "",
  modifier: "",
  manage_category: "",
  manage_description: "",
  manage_date: "",
  manager_name: "",
};

export const componentFormSchema = z.object({
  code: z.string().optional(),
  name: z.string().optional(),
  filename: z.string().optional(),
  file_type: z.string().optional(),
  file_format: z.string().optional(),
  file_size: z.string().optional(),
  file_url: z.string().optional(),
  modify_date: z.string().optional(),
  modify_item: z.string().optional(),
  modify_pre_value: z.string().optional(),
  modify_value: z.string().optional(),
  modifier: z.string().optional(),
});

export const componentDefaultValue = {
  code: "",
  name: "",
  filename: "",
  file_type: "",
  file_format: "",
  file_size: "",
  file_url: "",
  modify_date: "",
  modify_item: "",
  modify_pre_value: "",
  modify_value: "",
  modifier: "",
};
