import { Pagination } from "@mui/material";

interface PaginateProps {
  setPage: (_: number) => void;
  totalItems: number | null;
  limit: number;
  page: number;
}

const Paginate: React.FC<PaginateProps> = ({
  setPage,
  page,
  totalItems,
  limit,
}) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Pagination
        count={totalItems ? Math.ceil(totalItems / limit) : 0}
        page={page}
        shape="rounded"
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </>
  );
};

export default Paginate;
