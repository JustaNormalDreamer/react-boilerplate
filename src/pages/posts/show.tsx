import { useGetPostQuery } from '@/redux/posts/post.reducer';
import { useParams } from 'react-router-dom';

const ShowPost = () => {
  const { postId } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(postId, {
    skip: !postId,
  });

  return (
    <section className="container">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="">
          {isError ? (
            <>Something went wrong.</>
          ) : (
            <div className="p-4 border rounded-md bg-white shadow-md hover:shadow-xl transition duration-500 space-y-4">
              <h3 className="text-2xl font-bold">{data?.title}</h3>
              <p className="">{data?.body}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ShowPost;
