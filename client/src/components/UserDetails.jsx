import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { AiOutlineSearch, AiOutlineFileText } from 'react-icons/ai';
import userData from './userData.json';
import ReportModal from './ReportModal';

const UserDetails = () => {
  const [data, setData] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Username', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Phone', accessor: 'phone' },
      { Header: 'Creation Date', accessor: 'created_at' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button
            onClick={() => openModal(row.original)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <AiOutlineFileText size={20} className="mr-2" />
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  useEffect(() => {
    setData(userData);
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8 overflow-x-hidden">
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users"
              value={state.globalFilter || ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="border p-2 pl-10 pr-10 rounded-full"
            />
            <span className="absolute left-3 top-2">
              <AiOutlineSearch size={20} />
            </span>
          </div>
        </div>
        {rows.length > 0 ? (
          <table {...getTableProps()} className="table-auto bg-white border rounded-lg shadow-md">
            <thead className="bg-purple-600 text-white">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-10 py-4 border cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span>{column.render('Header')}</span>
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              ' 🔽'
                            ) : (
                              ' 🔼'
                            )
                          ) : (
                            <span className="ml-1">&#8645;</span>
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()} className="hover:bg-gray-200">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-10 py-4 border">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-600 font-semibold p-4">
            No matching users found.
          </div>
        )}
        <ReportModal isOpen={isModalOpen} onRequestClose={closeModal} user={selectedUser} />
      </div>
    </div>
  );
};

export default UserDetails;
