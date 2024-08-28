import Benefits from '@/components/Benefits';
import BrandsComponents from '@/components/BrandsComponents';
import CardLogo from '@/components/CardLogo';
import Image from 'next/image';
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <section className="bg-black text-center text-white px-8 py-40 md:px-16 xl:px-72 ">
        <h1 className="text-7xl md:text-9xl pb-8">Beyond the artboards</h1>
        <p className="text-[1.5rem] md:text-[1rem] pb-32">
          We&apos;re on a mission to transform design. We believe in seamless
          collaboration, being recognized for all your work, and the magic that
          happens when everyone is actually on the same page.
        </p>

        <p className="font-semibold text-[1.5rem] pb-9">
          Trusted by thousands of companies of all sizes and industries
        </p>

        {/* container brands */}
        <BrandsComponents />
      </section>

      <section className="px-8 py-20 ">
        <h3 className="text-4xl md:text-5xl lg:text-6xl pb-6 md:pb-0">
          From outputs to outcomes
        </h3>

        <div className="flex flex-col md:flex-row gap-5">
          <Image src="/semiCircle.svg" alt="image" height={300} width={300} />

          <div className="flex flex-col gap-4 pt-20 lg:mr-16 ">
            <article>
              Abstract started from a question. Specifically, &quot;Why
              don&apos;t designers have proper version control?&quot; And so our
              first product was born: a tool to manage, version, and document
              design files in one place.
            </article>
            <article>
              Since our 2017 launch, Abstract has been the leading platform for
              file-based design collaboration, helping more than 7,000 companies
              improve their workflows.
            </article>
            <article>
              Today, we build products to support the huge portion of a
              designer’s job that isn’t drawing, kerning, or prototyping.
              Because design teams deserve their own space to collaborate.
            </article>
            <article>
              Welcome to Abstract, the design intelligence platform.
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#dadbf1] text-center px-8 py-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl pb-6">
          Design-focused, by design
        </h2>
        <p className=" md:text-[1rem] pb-20 leading-6">
          Working at Abstract is an opportunity to create, problem solve, and
          collaborate with the most curious and innovative minds in the
          business.
        </p>

        <button className="text-xl px-8 py-4 text-white rounded-lg bg-Blue hover:bg-btnHover">
          View Job Openings
        </button>
      </section>

      <section className="text-center  py-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl pb-6">Brand assets</h2>
        <p>
          Looking for our logo or a brief description of Abstract? We got you.
        </p>
      </section>

      <section className="px-8 pb-36">
        <h2 className="text-4xl md:text-5xl lg:text-6xl pb-2">Our Logo</h2>
        <p className="pb-8">
          Our mark is the main point of interaction with the Abstract brand.
          It’s “abstract,” but always pointing and pushing forward.
        </p>

        <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardLogo
            image="/whiteWordmark.svg"
            title="Black Wordmark"
            labelSvg="SVG"
            labelPng="PNG"
            bgColor=""
          />
          <CardLogo
            image="/WhiteIcon.svg"
            title="Black Icon"
            labelSvg="SVG"
            labelPng="PNG"
            bgColor="bg-[#d8dedd]"
          />
          <CardLogo
            image="/WhiteWordmark.svg"
            title="White Wordmark"
            labelSvg="SVG"
            labelPng="PNG"
            bgColor="bg-[#12323c]"
          />
          <CardLogo
            image="/white.svg"
            title="White Icon"
            labelSvg="SVG"
            labelPng="PNG"
            bgColor="bg-[#dadbf1]"
          />
        </div>
      </section>

      <section className="px-10 pb-16">
        <h2 className="text-4xl pb-4">So what is Abstract® anyway?</h2>
        <p>
          Glad you asked. Here are a few ways to answer that, depending on which
          situation you find yourself in.
        </p>

        <article className='lg:mx-10 xl:mx-16'>
          <Benefits
            title="One-floor elevator ride"
            desc="Abstract is a design intelligence platform that helps teams gather
              requirements, review desgns, and continuously measure what works,
              all in one space."
          />
          <Benefits
            title="Multi-floor elevator ride"
            desc="Just like Product and Engineering, design teams deserve their own
              platform for more intelligent collaboration throughout the design
              process. That’s why there’s Abstract®: a shared space for
              gathering requirements, reviewing designs, and continuously
              measuring what works. Abstract® is purpose-built to help designers
              gather and share context, track and assign work, tackle feedback,
              and ultimately deliver amazing products. The right process and
              platform make it possible for design teams to create to their full
              potential — because just looking at the same thing does not
              translate to being on the same page."
          />
          <Benefits
            title="Aliens invading earth"
            desc=" Kinda strange to get this question given the circumstances, but if
              asked: design intelligence!"
          />
        </article>
      </section>
    </div>
  );
}

export default AboutPage