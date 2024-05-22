"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { sendContactEmail } from "./utils/sendContactEmail";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "필수값입니다." })
    .max(15, { message: "15자 이내로 입력해주세요." }),
  email: z
    .string()
    .min(1, { message: "필수값입니다." })
    .email({ message: "이메일 형식이 아닙니다." })
    .max(30, { message: "30자 이내로 입력해주세요." }),
  subject: z
    .string()
    .min(1, { message: "필수값입니다." })
    .max(30, { message: "30자 이내로 입력해주세요." }),
  message: z
    .string()
    .min(1, { message: "필수값입니다." })
    .max(50, { message: "50자 이내로 입력해주세요." }),
});

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    sendContactEmail(values)
      .then(() => toast.success("성공적으로 메일을 전송했습니다."))
      .catch((error) => toast.error("메일 전송을 실패했습니다."));
    form.reset();
  };

  return (
    <div className="flex flex-col w-[500px] gap-6 items-center">
      <h1 className="text-xl text-blue-800 font-semibold">Contact Us</h1>
      <Separator className="h-2 w-14 bg-blue-800" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-[66px]">
                <FormControl>
                  <Input
                    className={field.value && "border-blue-800 border-2"}
                    placeholder="Your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-[66px]">
                <FormControl>
                  <Input
                    className={field.value && "border-blue-800 border-2"}
                    placeholder="Your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="h-[66px]">
                <FormControl>
                  <Input
                    className={field.value && "border-blue-800 border-2"}
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="h-[100px]">
                <FormControl>
                  <Textarea
                    className={field.value && "border-blue-800 border-2"}
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="rounded-lg bg-blue-800" type="submit">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
