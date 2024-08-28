import NavBar from "@/components/blog/NavBar"

const CategoriesLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default CategoriesLayout