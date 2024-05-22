import * as z from "zod";
import { FormSchema } from "@/app/page";

export const sendContactEmail = async (req: z.infer<typeof FormSchema>) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  return await response.json();
};
