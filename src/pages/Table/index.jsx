import { useMemo, useState, useEffect } from "react";
import Table from "../../components/Table";
import Input from "../../components/Input";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { branchData } from "./data";
import { FaFilter } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const { Tr, Th, Td, THead, TBody, Sorter } = Table;

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <div className="w-full flex justify-start items-center">
      <div className="flex justify-center items-center gap-2">
        <span className="flex mt-3">جستجوکردن:</span>
        <Input
          size={200}
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

function Filtering() {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10); // Manage page size state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHeader, setActiveHeader] = useState(""); // Track active column header
  const [selectedBranches, setSelectedBranches] = useState([]); // Track selected branches

  const columns = useMemo(
    () => [
      {
        header: "ردیف",
        accessorKey: "rowNumber",
        filterFn: "fuzzy",
      },
      {
        header: "تاریخ",
        accessorKey: "date",
        filterFn: "fuzzy",
      },
      {
        header: "ساعت",
        accessorKey: "time",
        filterFn: "fuzzy",
      },
      {
        header: "نام شعبه",
        accessorKey: "branchName",
        filterFn: "fuzzy",
      },
      {
        header: "کد شعبه",
        accessorKey: "branchCode",
        filterFn: "fuzzy",
      },
      {
        header: "رویداد",
        accessorKey: "event",
        filterFn: "fuzzy",
      },
      {
        header: "شماره ورودی",
        accessorKey: "entryNumber",
        filterFn: "fuzzy",
      },
      {
        header: "نام ورودی",
        accessorKey: "entryName",
        filterFn: "fuzzy",
      },
      {
        header: "نام کاربر",
        accessorKey: "userName",
        filterFn: "fuzzy",
      },
      {
        header: "شماره کاربر",
        accessorKey: "userNumber",
        filterFn: "fuzzy",
      },
    ],
    []
  );

  const [tableData, setTableData] = useState(branchData);

  const table = useReactTable({
    data: tableData,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { columnFilters, globalFilter },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugHeaders: true,
    debugColumns: false,
  });

  const handleFilterClick = (header) => {
    setActiveHeader(header);
    setIsModalOpen(true);
  };

  const handleApplyFilter = () => {
    if (activeHeader === "نام شعبه") {
      // Filter by selected branches
      const filteredData = branchData.filter((row) =>
        selectedBranches.includes(row.branchName)
      );
      setTableData(filteredData);
    }
    setIsModalOpen(false);
  };

  const handleBranchSelection = (branchName) => {
    setSelectedBranches((prev) =>
      prev.includes(branchName)
        ? prev.filter((name) => name !== branchName)
        : [...prev, branchName]
    );
  };

  const branchNames = useMemo(
    () => [...new Set(branchData.map((item) => item.branchName))],
    []
  );

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center p-4 gap-4">
        <DebouncedInput
          value={globalFilter ?? ""}
          className="p-2 font-normal text-sm border rounded-lg mt-4 flex justify-center items-center"
          placeholder="جستجوی در همه  ستون ها..."
          onChange={(value) => setGlobalFilter(String(value))}
        />
        <hr className="w-full " />
        <Table className="w-full border-collapse">
          <THead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="text-center py-2 px-4 border-b border-gray-200"
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex justify-center items-center gap-2">
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        {/* Sorting Icon */}
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            header.column.getToggleSortingHandler()()
                          }
                        >
                          <Sorter sort={header.column.getIsSorted()} />
                        </span>
                        {/* Filter Icon */}
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            handleFilterClick(header.column.columnDef.header)
                          }
                        >
                          <FaFilter size={12} />
                        </span>
                      </div>
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </THead>
          <TBody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <Td
                    key={cell.id}
                    className="text-center py-2 px-4 border-b border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </TBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              قبلی
            </button>
            <span className="flex items-center gap-1">
              <div>صفحه</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} از{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              بعدی
            </button>
          </div>
          {/* Page Size Selector */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="pageSize">تعداد سطر در هر صفحه:</label>
              <select
                id="pageSize"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  table.setPageSize(Number(e.target.value));
                }}
                className="border rounded-lg px-4 py-2"
              >
                {[10, 15, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="modal-content-class"
          overlayClassName="modal-overlay-class"
        >
          <div className="w-full flex flex-col justify-center items-start">
            <h2 className="text-xl">فیلتر برای {activeHeader}</h2>
            <hr className="mt-2 w-full" />
            {/* Dynamic Filter Content */}
            {activeHeader === "نام شعبه" && (
              <div className="overflow-y-auto max-h-[400px] w-full py-2">
                <h3 className="text-lg mb-1">انتخاب شعبه</h3>
                {branchNames.map((branchName) => (
                  <div key={branchName} className="flex justify-start items-center py-1">
                    <input
                      type="checkbox"
                      checked={selectedBranches.includes(branchName)}
                      onChange={() => handleBranchSelection(branchName)}
                    />
                    <label>{branchName}</label>
                  </div>
                ))}
              </div>
            )}
            <button className="bg-blue-500 px-2 py-2 text-white rounded-lg w-full" onClick={handleApplyFilter}>اعمال فیلتر</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Filtering;
