'use client';
import { useTablePagination } from '@/store/store';

export default function TablePagination({ getData }) {
    const pageNum = Math.ceil(getData.length / 10);
    const arr = new Array(pageNum).fill(1);

    const {pagination, setPagination} = useTablePagination();
    console.log('pagination: ', pagination);

    return (
        <div className="table-pagination">
            {arr.map((_, i) => (
                <div 
                    key={i} 
                    className={pagination === i ? 'selected' : ''} 
                    onClick={() => setPagination(i)}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}