import Advantages from '@/components/Advantages';
import TitlePlusItems from '@/components/TitlePlusItems';
import Image from 'next/image';
import React from 'react'

const CareersPage = () => {
  return (
    <section>
      <article className="p-8  mb-12 grid grid-cols-1 md:grid-cols-2 xl:mx-10  ">
        <div className="mb-4">
          <h1 className="text-5xl pb-4">
            To transform design, we’re starting with ourselves
          </h1>
          <p className="text-[1.3rem] pb-4">
            Abstract brings collaboration into product form, replacing silos
            with open systems. We include a wide range of ideas and voices so we
            can build something remarkable.
          </p>

          <button className="text-xl px-8 py-4 text-white rounded-lg bg-Blue hover:bg-btnHover">
            Join us
          </button>
        </div>

        {/* add Image */}
        <div className="">
          <Image
            src="/careerAssets/hsection.png"
            alt="image"
            height={200}
            width={200}
            className="w-full h-full object-cover"
          />
        </div>
      </article>

      <article className="p-8">
        <h1 className="text-4xl pb-12">Inside Abstract</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
          <Advantages
            image="/careerAssets/globe.svg"
            title="Work where you want."
            desc="Abstract is a 100% remote company, with team members spanning across 4 continents and 7 time zones.  Work with us and live wherever you want."
          />

          <Advantages
            image="/careerAssets/arrowTRO.svg"
            title="Actually belong."
            desc="Bring your whole self to work at Abstract. We prioritize having a tight-knit company culture, without needing to share the same physical space. Connect with top leaders in your field."
          />

          <Advantages
            image="/careerAssets/arrow.svg"
            title="Balance work & life."
            desc="With generous PTO, flexible work schedule for caregiving, health resources, and a fully virtual workspace, we recognize your life is as important as your work."
          />

          <Advantages
            image="/careerAssets/users.svg"
            title="Build together."
            desc="We celebrate our diversity through our commitment to authentic and creative expressions, and truly collaborative teams. What we build is a reflection of us."
          />

          <Advantages
            image="/careerAssets/flowerpot.svg"
            title="Grow your future."
            desc="With competitive pay, 401k, comprehensive benefits, and one-on-one coaching, there's tons of room for advancement and ample opportunities for you to thrive at Abstract."
          />

          <Advantages
            image="/careerAssets/stair.svg"
            title="Accelerate your career."
            desc="We invest in our people. Through training, mentorships, and special growth opportunities, we are encouraging upward mobility for people at all levels."
          />
        </div>
      </article>

      <div className="flex flex-col md:flex-row-reverse   md:pt-20">
        <TitlePlusItems
          className="bg-[#dadbf1] md:-translate-x-20    px-8 py-16 md:pl-28 rounded-3xl"
          title="How to work"
          desc="At Abstract, what we do is driven by a shared set of values and
            principles — not just words on paper (or, let's face it, on a
            screen), but real, tangible attributes that drive how we work
            together and how we show up for our customers and partners."

          items={[
            "Data is better than opinion",
            "We make our own weather",
            "Different minds see more parts",
            "Plans will change as ideas evolve",
            "When we ship, we ship together",
            "We do hard things",
            "Do the simplest thing first",
            "Somebody doesn't work here",
            "Question the status quo",
            "Get to the next hill",
          ]}
        />
        
        <article className="bg-black max-w-[400px]  md:min-w-[400px] max-h-[200px] md:translate-x-0  -translate-y-24  grid grid-cols-4 gap-4 justify-items-center p-4 text-white rounded-r-2xl ">
        

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/craft.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p className="text-white">Craft</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/curiosity.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Curiosity</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/grit.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Grit</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/impact.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Impact</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/inclusion.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Inclusion</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/service.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Service</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/careerAssets/iteration.svg"}
              alt="image"
              height={30}
              width={30}
            />
            <p>Iteration</p>
          </div>
        </article>
      </div>

      <article className="text-center md:mx-8 lg:mx-10  pt-20 pb-10">
        <h2 className="text-5xl pb-4">Work here. Live anywhere</h2>
        <p>
          Abstract’s vision for a wholly remote workspace with flexible
          schedules allows you to live and work in the place (and headspace) you
          choose. Given the choice to work from anywhere, you won&apos;t have to
          choose between following your dreams and keeping your dream job.
        </p>
      </article>

      <article className="flex  justify-center ">
        <div className="  md:min-w-[600px]  flex flex-col pb-24 text-gray-600">
          <h2 className="bg-[#12323c] text-white pt-6 text-xl px-6 pb-8 rounded-t-2xl">
            Create at Abstract
          </h2>

          <div className="px-6 pb-3">
            <h3 className=" font-semibold">Open Positions</h3>
            <hr className="bg-black h-[1px]" />

            <div className="py-2">
              <p className="text-sm">Finance</p>
              <div className="flex justify-between pl-2">
                <span className="text-[14px]">Financial Analyst</span>
                <span className="text-[12px] text-gray-600">
                  Salt Lake City, Utah
                </span>
              </div>
            </div>
            <hr className=" h-[1px]" />

            <div className="py-2">
              <p className="text-sm">Human Resources</p>
              <div className="flex justify-between pl-2">
                <span className="font-semibold text-[14px]">
                  General Application
                </span>
                <span className="text-sm text-gray-600">Lindon, Utah</span>
              </div>
            </div>
            <hr className="h-[1px]" />

            <div className="py-2">
              <p className="text-[12px]">IT</p>
              <div className="flex justify-between pl-2">
                <span className="font-semibold text-[14px]">
                  IT Security Engineer
                </span>
                <span className="text-[12px] text-gray-600">
                  Mayfaird, London, City of
                </span>
              </div>
            </div>
            <hr className=" h-[1px]" />

            <div className="py-2">
              <p className="text-[12px]">Marketing</p>
              <div className="flex justify-between items-center gap-1 pl-2">
                <span className="font-semibold text-[14px]">
                  Marketing Manager
                </span>
                <span className="text-[12px] flex-wrap text-gray-600">
                  Vancouver,British Columbia
                </span>
              </div>
            </div>
            <hr className="h-[1px]" />

            <div className="py-2">
              <p className="text-[12px]">Product</p>
              <div className="flex justify-between pl-2">
                <span className="font-semibold text-[14px]">
                  Software Engineer
                </span>
                <span className="text-[12px] text-gray-600">
                  Sydney, New South Wales
                </span>
              </div>
            </div>
            <hr className=" h-[1px]" />
          </div>

          <span className="text-end pr-8 text-gray-600 text-sm">
            Powered by BambooHR
          </span>
        </div>
      </article>
    </section>
  );
}

export default CareersPage