'use client'

// React Imports
import {useEffect, useState} from 'react'

// Feature Imports

// Package Imports
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  FilterFn,
  SortingFn,
} from '@tanstack/react-table'
import {RankingInfo, rankItem, compareItems} from '@tanstack/match-sorter-utils'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import SearchInput from './SearchInput'
import { UserModel } from '../models'
import { useGetAllUsersQuery } from '../apis'

declare module '@tanstack/react-table' {
  //add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({
    itemRank,
  })

  return itemRank.passed
}

export const UsersTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [globalFilter, setGlobalFilter] = useState('')

  const {isSuccess, data, isLoading, refetch} = useGetAllUsersQuery({})

  const columnHelper = createColumnHelper<UserModel>()
  const columns = [
    columnHelper.accessor('firstName', {
      header: 'First Name',
      cell: (user) => user.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
      cell: (user) => user.getValue(),
    }),
    columnHelper.accessor('username', {
      header: 'Username',
      cell: (user) => user.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (user) => user.getValue(),
    }),
  
    columnHelper.accessor('actions', {
      header: 'Actions',
      cell: (question) => (
        <div className='flex justify-between mx-2'>
          <button className=' text-black ' onClick={() => console.log('Edit')}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            className=' text-black '
            onClick={() =>
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#657DFF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
              }).then((result) => {
                if (result.isConfirmed) {
                  console.info(`question`, question)
                  deleteQuestion({id: question.cell.row.original.id})
                }
              })
            }>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ),
    }),
  ]

  const table = useReactTable({
    data: data?.users ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    rowCount: data?.users.length ?? 0,
    filterFns: {
      fuzzy: fuzzyFilter, //define as a filter function that can be used in column definitions
    },
    state: {
      pagination,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy',
  })


  return (
    <div className='mt-6'>
      <SearchInput
        value={globalFilter}
        onChange={(value: string) => setGlobalFilter(value)}
        placeholder='Search...'
        className='border p-1 rounded'
      />
      <table className='my-4 text-black'>
        <thead className='border-2 border-blue-500 border-lg'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='border-2 border-blue-500'>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='border-2 border-blue-500 px-2 text-base '>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='border-2 border-blue-500'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='border-2 border-blue-500'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='border-2 border-blue-500 px-2 py-1 '>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className='flex items-center gap-2'>
        <button
          className='border rounded p-1 text-black border-blue-500'
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}>
          {'<<'}
        </button>
        <button
          className='border rounded p-1 text-black border-blue-500'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          {'<'}
        </button>
        <button
          className='border rounded p-1 text-black border-blue-500'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
        <button
          className='border rounded p-1 text-black border-blue-500'
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}>
          {'>>'}
        </button>
        <span className='flex items-center gap-1 text-black border-blue-500'>
          <div className='text-black '>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className='flex items-center gap-1 text-black '>
          | Go to page:
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded w-16 border-blue-500'
          />
        </span>
      </div>
    </div>
  )
}
