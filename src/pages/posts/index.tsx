import { useGetPostsListQuery } from '@/redux/post.reducer';
import { Link } from 'react-router-dom';

const ListPost = () => {
  const { data, isLoading } = useGetPostsListQuery();

  return (
    <section className="container">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data?.map(({ id, title, body }) => (
            <div
              className="p-4 border rounded-md bg-white shadow-md hover:shadow-xl transition duration-500 space-y-4"
              key={id}
            >
              <h3 className="text-2xl font-bold">
                <Link to={`/posts/${id}`} className="hover:text-gray-600 transition duration-150">
                  {title}
                </Link>
              </h3>
              <p className="">{body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListPost;
