import Advantages from "./Advantages";
import DedicatedProduct from "./DedicatedProduct";
import Pricing from "./Pricing";
import WhyDisgnTeam from "./WhyDisgnTeam";

const Description = () => {
  return (
    <section className="bg-[#dadbf1] pt-24 py-6 pb-4 px-4 ">
      
        <h2 className="font-semibold text-5xl pb-12">
          Design collaboration shouldn&apos;t be extra work.
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3  px-6 pb-16">
        
        <Advantages
          image="/Clock.svg"
          title="Less files. More flow."
          desc='No more digging through Dropbox and Google Drive. Always know where
            to find "the latest," so you cat stay in your design flow.'
        />

        <Advantages
          image="/FlowerPot.svg"
          title="Design together, in real time."
          desc="Explore and iterate in the same file at the same time, without
            loging the original. Simply create a branch, do your thing, then
            merge your changes when ready"
        />

        <Advantages
          image="/Arrow.svg"
          title="Iterate with context."
          desc="Know who made changes, when, and why. Compare changes side by side,
            resolve design conflicts, and merge work with precision."
        />
      </div>

      <WhyDisgnTeam title="Why design teams love Abstract" />

      <DedicatedProduct
        title="Dedicated to product designers"
        desc="Get inspired by stories and resources from the best product design
        leaders and teams."
      />

      <Pricing title="Level up your workflow" />
    </section>
  );
}

export default Description