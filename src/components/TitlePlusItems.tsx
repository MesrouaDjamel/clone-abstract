
const TitlePlusItems = ({className,desc,title,items}: {className?:string,desc?:string,title:string,items:string[]}) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-3xl pb-2">{title}</h3>
      <p className="pb-12">{desc}</p>
      <ul className="flex flex-col gap-4 font-semibold">
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitlePlusItems