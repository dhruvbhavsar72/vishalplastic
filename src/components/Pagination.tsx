import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
                {/* Prev */}
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
                    >
                        <FontAwesomeIcon icon={['fas', 'arrow-left']} size="xs" />
                    </button>
                </li>

                {/* Numbers */}
                {pages.map((page) => (
                    <li
                        key={page}
                        className={`page-item ${page === currentPage ? "active" : ""}`}
                    >
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next */}
                <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                >
                    <button
                        className="page-link" disabled={currentPage === totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} size="xs" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
