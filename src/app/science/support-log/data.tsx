import TableInput from "@/components/table/TableInput";
import TableDatePicker from "@/components/table/TableDatePicker";
import TableSelect from "@/components/table/TableSelect";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import TableTextarea from "@/components/table/TableTextarea";
import TableRadio from "@/components/table/TableRadio";

interface Props {
  form: UseFormReturn<any>;
}

export const SupportLogData = ({ form }: Props) => {
  const enrollInfoList = [
    {
      label: "보존처리",
      value: 1,
    },
    {
      label: "보존환경변경",
      value: 2,
    },
    {
      label: "보존상자배포",
      value: 3,
    },
    {
      label: "보호각설치",
      value: 4,
    },
    {
      label: "기타",
      value: 5,
    },
  ];

  const data = [
    {
      title: "메타데이터 항목명",
      node: (
        <TableRadio
          form={form}
          name="recipt_no"
          labelData={{ Y: "에", N: "아니오" }}
        />
      ),
    },
    {
      title: "식별정보",
      children: [
        {
          label: "접수번호",
          node: <TableInput form={form} name="recipt_no" />,
        },
        {
          label: "접수일시",
          node: <TableDatePicker form={form} name="receipt_date" />,
        },
      ],
    },
    {
      title: "신청정보",
      children: [
        {
          label: "개인/단체명",
          node: <TableInput form={form} name="enroll_name" />,
        },
        {
          children: [
            {
              label: "개인/단체주소",
              node: <TableInput form={form} name="enroll_address" />,
            },
            {
              label: "연락처",
              node: <TableInput form={form} name="enroll_contact" />,
            },
          ],
        },
        {
          children: [
            {
              label: "소유자와의 관계",
              node: <TableInput form={form} name="enroll_relation" />,
            },
            {
              label: "지원유형",
              node: (
                <TableSelect
                  form={form}
                  name="enroll_info"
                  defaultItem={{ label: "", value: undefined }}
                  selectList={enrollInfoList}
                />
              ),
            },
          ],
        },
      ],
    },
    {
      title: "업무담당",
      children: [
        {
          label: "이름",
          node: <TableInput form={form} name="manager_name" />,
        },
        {
          children: [
            {
              label: "연락처",
              node: <TableInput form={form} name="manager_contact" />,
            },
            {
              label: "이메일",
              node: <TableInput form={form} name="manager_email" />,
            },
          ],
        },
      ],
    },
    {
      title: "지원정보",
      children: [
        {
          label: "지원정보",
          node: <TableInput form={form} name="support_period" />,
        },
        {
          label: "예산(천원)",
          node: <TableInput form={form} type="number" name="support_amount" />,
        },
        {
          label: "내용",
          node: <TableTextarea form={form} name="support_content" />,
        },
      ],
    },
    {
      title: "관련보고서",
      children: [
        {
          label: "제목",
          node: <TableInput form={form} name="report_title" />,
        },
        {
          children: [
            {
              label: "날짜",
              node: <TableInput form={form} name="report_date" />,
            },
            {
              label: "수행기관",
              node: <TableInput form={form} name="report_inst" />,
            },
          ],
        },
        {
          label: "발간등록번호",
          node: <TableInput form={form} name="report_no" />,
        },
      ],
    },
    {
      title: "특이사항",
      node: <TableTextarea form={form} name="significant" />,
    },
  ];

  return data;
};
