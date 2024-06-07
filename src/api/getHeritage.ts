import { heritageFormSchema } from "@/app/science/heritage-info/schema";
import { z } from "zod";

interface heritageRes {
  code: number;
  mesesage: string;
  data: z.infer<typeof heritageFormSchema>;
}

export const getHeritage = async () => {
  return await fetch("/api/heritage").then((res) => res.json());
};
