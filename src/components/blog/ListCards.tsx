import BlogCard from './BlogCard'

const ListCard = ({data}:{data:any}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-16 lg:grid-cols-3 justify-items-center xl:mx-10 gap-4">
      {data.map((item: any) => (
        <div key={item.id} className=" max-w-[360px] border rounded-xl cursor-pointer border-zinc-800 p-4 ">
          <BlogCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default ListCard