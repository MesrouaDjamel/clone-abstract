import TitlePlusItems from "@/components/TitlePlusItems"

const PrivacyPage = () => {
  return (
    
     <TitlePlusItems
      className="bg-[#dadbf1] px-8 py-16 my-40 mr-8 md:mr-56 lg:mr-96  rounded-3xl"
      title="Privacy"
      items={[
        "Abstract Sub-Processors",
        "Cookie Policy",
        "Data Processing Addendum",
        "Manage My Data",
        "Privacy Policy",
      ]} 
    />
  );
}

export default PrivacyPage