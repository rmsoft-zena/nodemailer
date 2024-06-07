export const GET = async () => {
  const data = {
    code: "KR/NS/F029-1-1",
    name: "대한식소총(육군)_기본_등록신청서",
    keyword: "대한식소총, 국방기계, 화포, 병기류",
    product_system: "표준관리시스템",
    dept: "한국과학기술사과",
    personal_name: "",
    position: "",
    product_date: "",
    enroll_date: "2022.01.27",
    file_cnt: 1,
    preserve_period: "영구",
    preserve_reason: "국가중요과학기술자료에 대한 주요 정보를 포함하는 기록물",
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
  return new Response(
    JSON.stringify({
      code: 100,
      message: null,
      data: data,
    })
  );
};
