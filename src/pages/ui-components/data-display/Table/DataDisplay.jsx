import React from 'react';
import AdaptableCard from '../../../../components/shared/AdaptableCard';
import GenericTable from './GenericTable';
// import ProductTableTools from '../../../sales/ProductList/components/ProductTableTools';

const DataDisplay = ({
    data,
    columns,
    loading,
    title,
    total,
    pageIndex,
    pageSize,
    onPaginationChange,
    onSort,
    onSelectChange,
    onSearch,
    onRowClick,
    filterInitialValues,
    filterOptions,
    onFilter,
    count,
    button,
}) => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <div className='flex justify-center items-center gap-2'>
                    <h3 className="mb-4 lg:mb-0">{title}</h3>
                    {button && <div>{button}</div>}
                    <span>{count}</span>
                </div>
           
                {/* <ProductTableTools 
                    onSearch={onSearch} 
                    filterInitialValues={filterInitialValues} 
                    filterOptions={filterOptions}
                    onFilter={onFilter} 
                /> */}
            </div>
            <GenericTable
                data={data}
                columns={columns}
                loading={loading}
                total={total}
                pageIndex={pageIndex}
                pageSize={pageSize}
                onPaginationChange={onPaginationChange}
                onSort={onSort}
                onSelectChange={onSelectChange}
                onRowClick={onRowClick} // Pass row click handler
            />
      
        </AdaptableCard>
    );
};

export default DataDisplay;
