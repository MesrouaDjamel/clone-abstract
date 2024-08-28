
const Benefits = ({title,desc}:{title:string,desc:string}) => {
  return (
    <div className="px-5 py-8 ">
      <h3 className="text-xl pb-2">{title}</h3>
      <p className="bg-[#dadbf1] p-8 rounded-xl">{desc}</p>
    </div>
  );
}

export default Benefits