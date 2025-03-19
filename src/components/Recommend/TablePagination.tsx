'use client';
import { useState } from 'react';

export default function TablePagination({ getData }) {
    const pageNum = Math.ceil(getData.length / 10);
    const arr = new Array(pageNum).fill(1);

    const [selectedPage, setSelectedPage] = useState(0); 

    return (
        <div className="table-pagination">
            {arr.map((_, i) => (
                <div 
                    key={i} 
                    className={selectedPage === i ? 'selected' : ''} 
                    onClick={() => setSelectedPage(i)}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
