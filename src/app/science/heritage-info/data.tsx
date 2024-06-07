import TableInput from "@/components/table/TableInput";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any>;
}

export const HeritageInfoData = ({ form }: Props) => {
  const data = [
    {
      title: "메타데이터 항목명",
      node: <Input value="대한식소총" disabled />,
    },
    {
      title: "식별정보",
      children: [
        {
          label: "국가유산 식별자\n(아이템 식별자)",
          node: <TableInput form={form} name="code" />,
        },
        {
          label: "국가유산명\n(아이템명)",
          node: <TableInput form={form} name="name" />,
        },
        { label: "검색어", node: <TableInput form={form} name="keyword" /> },
      ],
    },
    {
      title: "생산정보",
      children: [
        {
          label: "생산시스템",
          node: <TableInput form={form} name="product_system" />,
        },
        {
          children: [
            { label: "부서명", node: <TableInput form={form} name="dept" /> },
            {
              label: "개인명",
              node: <TableInput form={form} name="personal_name" />,
            },
          ],
        },
        {
          label: "직위(직급명)",
          node: <TableInput form={form} name="position" />,
        },
        {
          children: [
            {
              label: "생산일시",
              node: <TableInput form={form} name="product_date" />,
            },
            {
              label: "등록일시",
              node: <TableInput form={form} name="enroll_date" />,
            },
          ],
        },
      ],
    },
    {
      title: "파일정보",
      children: [
        {
          label: "파일수량",
          node: <TableInput form={form} type="number" name="file_cnt" />,
        },
      ],
    },
    {
      title: "기록물보존정보",
      children: [
        {
          label: "보존기간",
          node: <TableInput form={form} name="preserve_period" />,
        },
        {
          label: "보존기간 책정사유",
          node: <TableInput form={form} name="preserve_reason" />,
        },
      ],
    },
    {
      title: "기록물보존이력",
      children: [
        {
          children: [
            {
              label: "보존처리유형",
              node: <TableInput form={form} name="preserve_category" />,
            },
            {
              label: "보존처리설명",
              node: <TableInput form={form} name="preserve_description" />,
            },
          ],
        },
        {
          children: [
            {
              label: "보존처리일시",
              node: <TableInput form={form} name="preserve_date" />,
            },
            {
              label: "보존\n행위자",
              node: <TableInput form={form} name="preserver" />,
            },
          ],
        },
      ],
    },
    {
      title: "변경이력",
      children: [
        {
          children: [
            {
              label: "변경일자",
              node: <TableInput form={form} name="modify_date" />,
            },
            {
              label: "변경항목",
              node: <TableInput form={form} name="modify_item" />,
            },
          ],
        },
        {
          children: [
            {
              label: "변경이전값",
              node: <TableInput form={form} name="modify_pre_value" />,
            },
            {
              label: "변경이후값",
              node: <TableInput form={form} name="modify_value" />,
            },
          ],
        },
        {
          label: "변경행위자",
          node: <TableInput form={form} name="modifier" />,
        },
      ],
    },
    {
      title: "관리이력",
      children: [
        {
          label: "관리유형",
          node: <TableInput form={form} name="manage_category" />,
        },
        {
          label: "관리설명",
          node: <TableInput form={form} name="manage_description" />,
        },
        {
          children: [
            {
              label: "관리일시",
              node: <TableInput form={form} name="manage_date" />,
            },
            {
              label: "관리행위자",
              node: <TableInput form={form} name="manager_name" />,
            },
          ],
        },
      ],
    },
    {
      title: "관리이력",
      totalCnt: 4,
      children: [
        {
          title: "예비\n심사",
          totalCnt: 2,
          children: [
            {
              label: "관리유형",
              node: <TableInput form={form} name="manage_category" />,
            },
            {
              label: "관리설명",
              node: <TableInput form={form} name="manage_description" />,
            },
          ],
        },
        {
          title: "종합\n심사",
          totalCnt: 2,
          children: [
            {
              label: "관리유형",
              node: <TableInput form={form} name="manage_category" />,
            },
            {
              label: "관리설명",
              node: <TableInput form={form} name="manage_description" />,
            },
          ],
        },
      ],
    },
  ];

  return data;
};
