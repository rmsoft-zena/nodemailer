import * as z from "zod";

export const excavationInfoSchema = z.object({
  inst: z.string().optional(),
  managerName: z.string().optional(),
  report_title: z.string().optional(),
  report_date: z.string().optional(),
  report_inst: z.string().optional(),
  report_no: z.string().optional(),
});

export const excavationInfoDefaultValue = {
  inst: "",
  managerName: "",
  report_title: "",
  report_date: "",
  report_inst: "",
  report_no: "",
};
