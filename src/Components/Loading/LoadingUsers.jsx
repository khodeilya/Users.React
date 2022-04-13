import Skeleton from "react-loading-skeleton";
const LoadingUsers = () => {
  return Array(6)
    .fill({})
    .map(() => {
      return (
        <div className="col-4 text-center p-5">
          <Skeleton className="mb-4" circle={true} width={30} height={30} />
          <Skeleton className="mb-2" height={30} count={2} />
        </div>
      );
    });
};

export default LoadingUsers;
