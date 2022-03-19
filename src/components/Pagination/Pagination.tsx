import { useState } from 'react';
import { IPagination, IPokemon } from '../../commom/types';
import ListElement from '../ListElement/ListElement';
import './Pagination.styles.scss';

const Pagination = (props: IPagination): React.ReactElement => {
  const { data, dataLimit } = props;
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage(): void {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage(): void {
    setCurrentPage((page) => page - 1);
  }

  const getPaginatedData = (): IPokemon[] => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div className="dataContainer">
        <table>
          <tbody>
            {getPaginatedData().map((d: IPokemon, idx: number) => (
              <ListElement key={idx} name={d.name} url={d.url} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} className={`${currentPage === 1 ? 'disabled' : ''}`}>
          PREV
        </button>
        <button onClick={goToNextPage} className={` ${currentPage === pages ? 'disabled' : ''}`}>
          NEXT
        </button>
      </div>
    </div>
  );
};
export default Pagination;
