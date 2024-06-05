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
        <col width={"15%"} />
        <col width={"27.5%"} />
        <col width={"15%"} />
        <col width={"27.5%"} />
      </colgroup>
      <TableBody className="border">
        {data?.map((el) =>
          // 1Deps
          !el?.children ? (
            <TableRow key={el.title}>
              <TableCell
                className="border-r bg-gray-50 px-[0.62rem] py-[1.6rem]"
                colSpan={2}
              >
                {el?.title}
              </TableCell>
              <TableCell className="py-2" colSpan={3}>
                {el?.node}
              </TableCell>
            </TableRow>
          ) : (
            el?.children?.map((e: any, idx: number) => (
              <TableRow key={el.title + idx}>
                {/* 2Deps title */}
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
                      // 2Deps & 2Cell
                      <Fragment key={label + i}>
                        <TableCell
                          className={`border-r bg-gray-50 px-[0.62rem] py-2 ${
                            i % 2 && "border-x"
                          }`}
                        >
                          {label}
                        </TableCell>
                        <TableCell className="py-2">{node}</TableCell>
                      </Fragment>
                    )
                  )
                ) : (
                  // 2Deps & 1Cell
                  <>
                    <TableCell className="border-r bg-gray-50 px-[0.62rem] py-2">
                      {e.label}
                    </TableCell>
                    <TableCell className="py-2" colSpan={3}>
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
