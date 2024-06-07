import { uploadFile } from "@/api/uploadFile";
import TableInput from "@/components/table/TableInput";
import TableSelect from "@/components/table/TableSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { ChangeEvent, useState } from "react";
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

  const fileTypeOptions = [
    { label: "일반 문서", value: 1 },
    { label: "이미지", value: 2 },
    { label: "동영상", value: 3 },
    { label: "3D 프린팅", value: 4 },
  ];

  const [file, setFile] = useState({
    filename: "",
    file_size: "",
  });

  const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e?.target?.files;
    if (target === null) return;
    if (target.length === 0) return;

    if (!target) {
      return;
    }
    const file = target?.[0];
    uploadFile(file).then((res) => {
      form.setValue("filename", res.data?.originalFilename);
      form.setValue("file_url", res.data?.fileUrl);
      form.setValue("file_size", res.data?.fileSize);
      setFile({
        filename: res.data?.originalFilename,
        file_size: res.data?.fileSize,
      });
    });
  };

  const deleteFile = () => {
    setFile({ filename: "", file_size: "" });
    form.setValue("filename", "");
    form.setValue("file_url", "");
    form.setValue("file_size", "");
  };

  const componentData = [
    {
      title: "메타데이터 항목명",
      node: <Input value="대한식소총" disabled />,
    },
    {
      title: "식별정보",
      children: [
        {
          label: "국가유산 식별자\n(아이템 식별자)",
          node: <Input value="" disabled />,
        },
        {
          label: "컴포넌트 식별자",
          node: <TableInput form={form} name="code" />,
        },
        {
          label: "컴포넌트명",
          node: <TableInput form={form} name="name" />,
        },
      ],
    },
    {
      title: "파일정보",
      children: [
        {
          label: "파일 올리기",
          node: (
            <div className="flex flex-col gap-[0.62rem]">
              <Input
                type="file"
                id="file"
                className="hidden"
                onChange={onFileChangeHandler}
              />
              {file?.filename && file?.file_size && (
                <div className="flex items-center gap-[0.62rem]">
                  <p className="text-xs text-[#999]">
                    {file.file_size}(KB) | {file.filename}
                  </p>
                  <Button
                    variant={"ghost"}
                    className="p-0 hover:bg-"
                    onClick={deleteFile}
                  >
                    <X size={16} />
                  </Button>
                </div>
              )}
              <label
                htmlFor="file"
                className="px-4 py-2 text-primary border border-primary w-fit"
              >
                첨부파일
              </label>
            </div>
          ),
        },
        {
          label: "파일명",
          node: <TableInput form={form} name="filename" isDisabled={true} />,
        },
        {
          label: "파일크키(KB)",
          node: <TableInput form={form} name="file_size" isDisabled={true} />,
        },
        {
          label: "위치",
          node: <TableInput form={form} name="file_url" isDisabled={true} />,
        },
        {
          label: "파일유형",
          node: (
            <TableSelect
              form={form}
              name="file_type"
              selectList={fileTypeOptions}
            />
          ),
        },
        {
          label: "파일포맷",
          node: <TableInput form={form} name="file_format" />,
        },
        {
          label: "NFT 등록",
          node: (
            <div className="flex flex-col gap-[0.62rem]">
              <p className="text-[#999]">NFT를 등록할 수 있습니다.</p>
              <div>
                <Button variant={"blue"}>NFT 등록</Button>
              </div>
            </div>
          ),
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
  ];

  return { data, componentData };
};
