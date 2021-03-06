import { useState } from 'react';
import { IPagination, IPokemon } from '../../common/types';
import ListElement from '../ListElement/ListElement';
import './Pagination.styles.scss';

const Pagination = (props: IPagination): React.ReactElement => {
  const { data, dataLimit } = props;
  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = (): void => setCurrentPage((page) => page + 1);

  const goToPreviousPage = (): void => setCurrentPage((page) => page - 1);

  const getPaginatedData = (): IPokemon[] => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div className="dataContainer">
        <table>
          <tbody data-testid="tbodyPokemon">
            {getPaginatedData().map((d: IPokemon, idx: number) => (
              <ListElement key={idx} name={d.name} url={d.url} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          data-testid="button-prev"
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          PREV
        </button>
        <button
          data-testid="button-next"
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
export default Pagination;
