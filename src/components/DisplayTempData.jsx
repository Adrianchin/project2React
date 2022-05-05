import React, {useMemo} from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./tablecomponents/GlobalFilter";
import { Checkbox } from "./tablecomponents/Checkbox";

function DisplayTempData(props) {
  const tempDataReturn = props.tempDataReturn

  const GROUPEDCOLUMNS = [
    {
      Header: "Date",
      Footer: "Date",
      accessor: "weatherMergeDate",
    },
    {
      Header: "Mean T",
      Footer: "Mean T",
      accessor: "MEAN_TEMPERATURE",
    },
    {
      Header: "Min T",
      Footer: "Min T",
      accessor: "MIN_TEMPERATURE",
    },
    {
      Header: "Max T",
      Footer: "Max T",
      accessor: "MAX_TEMPERATURE",
    },
    {
      Header: "Date Info",
      Footer: "Date Info",
      columns: [
        {
          Header: "Year",
          Footer: "Year",
          accessor: "year",
        },
        {
          Header: "Month",
          Footer: "Month",
          accessor: "month",
        },
      ],
    },
    {
      Header: "Shelter Info",
      Footer: "Shelter Info",
      columns: [
        {
          Header: "Shelter Type",
          Footer: "Shelter Type",
          accessor: "sheltertype",
        },
        {
          Header: "Name",
          Footer: "Name",
          accessor: "shelter",
        },
        {
          Header: "Organization",
          Footer: "Organization",
          accessor: "organization",
        },
      ],
    },
    {
      Header: "Capacity",
      Footer: "Capacity",
      columns: [
        {
          Header: "Capacity",
          Footer: "Capacity",
          accessor: "capacity",
        },
        {
          Header: "Occupancy",
          Footer: "Occupancy",
          accessor: "overnight",
        },
      ],
    },
  ];
// if (tempDataReturn){
//   //Used for date conversion
//   const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };
//   const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
//   for (const obj of tempDataReturn){
//     obj.date = dateFormatter.format(new Date());
//   }
// }

  const data = useMemo(() => tempDataReturn,
  []
);

  const columns = useMemo(() => GROUPEDCOLUMNS,
  []
 );
  //destructured useTable made from columns and data, needed to display data
  const {
    getTableProps, //function that needs to be destructured on table tag
    getTableBodyProps, //function that needs to be destructured on table body tag
    headerGroups, //Contains column heading information that belongs on T header tag. Requires a map to render (similar to rendering a list)
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  ); /*useSortBy is a react table hook for sorting added to useTable*/

  const { globalFilter, pageIndex, pageSize } = state;
    return (
      <div>
        <>
          <div>
            {allColumns.map((column) => (
              <div key={column.id}>
                <label>
                  <Checkbox {...column.getToggleHiddenProps()} />
                  {column.Header}
                </label>
              </div>
            ))}
          </div>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <table {...getTableProps()} style={{ border: "solid 2px crimson " }}>
            <thead>
              {headerGroups.map(
                (
                  headerGroup /*for each header group, we render the tr tag*/
                ) => (
                  <tr
                    {
                      ...headerGroup.getHeaderGroupProps() /*in each tr tag, we destructure getHeaderGroupProps (required to enable layout for header)*/
                    }
                  >
                    {headerGroup.headers.map(
                      (
                        column /* in each table row, we map in table headers to access each column*/
                      ) => (
                        <th
                          {
                            ...column.getHeaderProps(
                              column.getSortByToggleProps() /* we pass column.getSortByToggleProps to allow sorting */
                            ) /* For each th tag, we destructure the column.getHeaderProps (required to enable layout for header) */
                          }
                          style={{
                            borderBottom: "solid 2px crimson",
                            background: "azure",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {
                            column.render(
                              "Header"
                            ) /* for each th (header section) we render the header section */
                          }
                          <span>
                            {
                              column.isSorted
                                ? column.isSortedDesc
                                  ? `↑`
                                  : `↓`
                                : "" /* if sorted (T, F), isSortedDesc checks (T,F) (desc, asc)*/
                            }
                          </span>
                        </th>
                      )
                    )}
                  </tr>
                )
              )}
            </thead>
            <tbody
              {
                ...getTableBodyProps() /*for each body group, we access getTableBodyProps (required to enable layout for body) and render the tbody tag*/
              }
            >
              {page.map((row) => {
                /*we map into rows and in each row, we map the prepareRow function and pass in row as argument*/
                prepareRow(row);
                return (
                  /*we need to return the tr tag for each row */
                  <tr
                    {
                      ...row.getRowProps() /* On each tr tag we destructure row.getRowProps (required to enable layout for rows) and map over the row.cells*/
                    }
                  >
                    {row.cells.map((cell) => {
                      /* gives us access to individual row cells */
                      return (
                        <td /* return the td tag for each cell */
                          {
                            ...cell.getCellProps() /* On each td tag we destructure cell.getCellProps (required to enable layout for cells) */
                          }
                          style={{
                            padding: "5px",
                            border: "solid .5px black",
                            background: "cornsilk ",
                          }}
                        >
                          {
                            cell.render(
                              "Cell"
                            ) /* on each cell, we render the cell */
                          }
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <span>
              page{""}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>
              | Go to page: {""}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(event) => {
                  const pageNumber = event.target.value
                    ? Number(event.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                style={{ width: "50px" }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(event) => setPageSize(Number(event.target.value))}
            >
              {[20, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </>
      </div>
    );
  
}

export default DisplayTempData;
