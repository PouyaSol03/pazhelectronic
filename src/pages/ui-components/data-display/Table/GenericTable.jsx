// import React, { useState } from 'react';
// import DataTable from '@/components/shared/DataTable';

// const GenericTable = ({ data, columns, loading, total, onPaginationChange, onSort, onSelectChange, pageIndex, pageSize }) => {
//     const [sortField, setSortField] = useState('');
//     const [sortOrder, setSortOrder] = useState('asc');

//     const handleSort = (sort) => {
//         setSortField(sort.key);
//         setSortOrder(sort.order);
//         // Call the onSort function passed as prop
//         if (onSort) {
//             onSort(sort);
//         }
//     };

//     return (
//         <DataTable
//             columns={columns}
//             data={data}
//             loading={loading}
//             total={total}
//             onPaginationChange={onPaginationChange}
//             onSort={handleSort} // Pass the handleSort function
//             onSelectChange={onSelectChange}
//             pageIndex={pageIndex}
//             pageSize={pageSize}
//         />
//     );
// };

// export default GenericTable;

import React, { useMemo, useRef } from 'react';
import DataTable from '../../../../components/shared/DataTable';
// import type { OnSortParam, ColumnDef } from '@/components/shared/DataTable';

const GenericTable = ({ data, columns, loading, total, onPaginationChange, onSort, onSelectChange, pageIndex, pageSize }) => {
    const tableRef = useRef(null);

    // Log the columns and data to verify their structure
    console.log('columns:', columns);
    console.log('data:', data);

    return (
        <DataTable
            ref={tableRef}
            columns={columns}
            data={data}
            loading={loading}
            pagingData={{
                total: total,
                pageIndex: pageIndex,
                pageSize: pageSize,
            }}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            onSort={onSort}
        />
    );
};

export default GenericTable;