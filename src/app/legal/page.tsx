import TitlePlusItems from "@/components/TitlePlusItems"

const LegalPage = () => {
  return (
    <TitlePlusItems
      className="bg-[#dadbf1] px-8 py-16 my-40 mr-8 md:mr-56 lg:mr-96  rounded-3xl"
      title="Legal"
      items={[
        "Acceptable Use Policy",
        "Copyright Policy",
        "Term of Use",
        "Data Processing Addendum",
        "Data Transfer Impact Assessment",
        "Trademarks",
      ]}
    />
  );
}

export default LegalPage