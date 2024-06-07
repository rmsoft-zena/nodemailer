import React from "react";
import { Fragment } from "react";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface TableMainInterface {
  data: Array<any>;
}

export default function TableMain({ data }: TableMainInterface) {
  return (
    <Table className="text-xs">
      <colgroup>
        <col width={"15%"} />
        <col width={"6%"} />
        <col width={"9%"} />
        <col width={"27.5%"} />
        <col width={"15%"} />
        <col width={"27.5%"} />
      </colgroup>
      <TableBody className="border">
        {data?.map((el) =>
          // 1label & 1node
          !el?.children ? (
            <TableRow key={el.title} className="hover:bg-inherit">
              <TableCell
                className="border-r bg-gray-50 px-[0.62rem] py-4"
                colSpan={3}
              >
                {el?.title}
              </TableCell>
              <TableCell className="py-2 px-[0.62rem]" colSpan={3}>
                {el?.node}
              </TableCell>
            </TableRow>
          ) : el?.totalCnt ? (
            // title > title > children
            el?.children?.map((e: any, idx: number) =>
              e?.children?.map(
                ({ label, node }: { label: string; node: any }, i: number) => (
                  <TableRow key={label + i} className="hover: bg-inherit">
                    {idx === 0 && i === 0 && (
                      <TableCell
                        className="border-r bg-gray-50 px-[0.62rem]"
                        rowSpan={el?.totalCnt}
                      >
                        {el?.title}
                      </TableCell>
                    )}
                    {i === 0 && (
                      <TableCell
                        className="border-r bg-gray-50 px-[0.62rem] text-center"
                        rowSpan={e?.totalCnt}
                      >
                        {e?.title?.split("\n").map((el: string, i: number) => (
                          <p key={i}>{el}</p>
                        ))}
                      </TableCell>
                    )}
                    <TableCell className="border-r bg-gray-50 px-[0.62rem] py-2 text-center">
                      {label}
                    </TableCell>
                    <TableCell className="py-2 px-[0.62rem]" colSpan={3}>
                      {node}
                    </TableCell>
                  </TableRow>
                )
              )
            )
          ) : (
            el?.children?.map((e: any, idx: number) => (
              <TableRow key={el.title + idx} className="hover:bg-inherit">
                {/* title > children*/}
                {idx === 0 && (
                  <TableCell
                    className="border-r bg-gray-50 px-[0.62rem]"
                    rowSpan={el?.children?.length}
                  >
                    {el?.title}
                  </TableCell>
                )}
                {e?.children ? (
                  e?.children?.map(
                    (
                      { label, node }: { label: string; node: React.ReactNode },
                      i: number
                    ) => (
                      // title > 1label & 2node
                      <Fragment key={label + i}>
                        <TableCell
                          colSpan={i === 0 ? 2 : 1}
                          className={`border-r bg-gray-50 px-[0.62rem] py-2 ${
                            i % 2 && "border-x"
                          }`}
                        >
                          {label?.split("\n").map((el: string, i: number) => (
                            <p key={i}>{el}</p>
                          ))}
                        </TableCell>
                        <TableCell className="py-2 px-[0.62rem]">
                          {node}
                        </TableCell>
                      </Fragment>
                    )
                  )
                ) : (
                  // title > 1label & 1node
                  <>
                    <TableCell
                      colSpan={2}
                      className="border-r bg-gray-50 px-[0.62rem] py-2"
                    >
                      {e.label?.split("\n").map((el: string, i: number) => (
                        <p key={i}>{el}</p>
                      ))}
                    </TableCell>
                    <TableCell className="py-2 px-[0.62rem]" colSpan={3}>
                      {e.node}
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )
        )}
      </TableBody>
    </Table>
  );
}
