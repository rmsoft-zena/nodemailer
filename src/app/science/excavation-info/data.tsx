import TableInput from "@/components/table/TableInput";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any>;
}

export const ExcavationInfoData = ({ form }: Props) => {
  const infoData = [
    {
      title: "메타데이터 항목명",
      node: <Input value="대한식소총" disabled />,
    },
    {
      title: "조사기관",
      node: <TableInput form={form} name="inst" />,
    },
    {
      title: "조사책임자",
      node: <TableInput form={form} name="manager_name" />,
    },
  ];

  const relatedReportData = [
    {
      title: "제목",
      node: <TableInput form={form} name="report_title" />,
    },
    {
      title: "발행일",
      node: <TableInput form={form} name="report_date" />,
    },
    {
      title: "기관",
      node: <TableInput form={form} name="report_inst" />,
    },
    {
      title: "발간등록번호",
      node: <TableInput form={form} name="report_no" />,
    },
  ];

  return { infoData, relatedReportData };
};
