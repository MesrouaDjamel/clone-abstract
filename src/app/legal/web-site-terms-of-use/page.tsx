import Link from 'next/link';
import React from 'react'

const PageTermsOfUse = () => {
  return (
    <section className="px-8 pt-12 md:mx-10 lg:mx-14 xl:mx-60">
      <h2 className="text-4xl pb-12 md:text-6xl">Abstract Website Terms of Use</h2>

      <p className="pb-12 uppercase">Last Modified: MARCH 14 ,2022</p>

      <p className="leading-6 pb-4">
        These Terms of Use govern your use of the website for Abstract Studio
        Design, Inc. <strong>(“Abstract”)</strong>, comprising various web pages
        including abstract.com and the resource hub, In The Margin™,
        (collectively the “Site”). Your use of the Site constitutes your
        agreement to these Terms of Use and Abstract’s{" "}
        <Link
          href={"/legal/privacy-policy"}
          className="text-Blue hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        . If you do not agree to the Terms of Use or the Privacy Policy, do not
        use the Site.
      </p>

      <p>
        You may also use this site to purchase Abstract services, which are
        subject to separate terms and conditions. Any other use of this Site,
        including the reproduction, modification, distribution, transmission, or
        republication of the content, is strictly prohibited except as expressly
        permitted in writing by Abstract.
      </p>

      <article className="py-12">
        <h3 className="text-2xl font-semibold pb-6">No Warranties</h3>
        <p>
          Information provided by Abstract on the Site is for informational
          purposes only. Abstract makes no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability or completeness of any information on the
          Site.
        </p>

        <h3 className="text-2xl font-semibold py-6">
          Third Party Links and Content
        </h3>
        <p>
          The Site may contain links to third party websites or content not
          belonging to or originating from Abstract. Abstract makes no
          representations or warranties regarding non-Abstract content or links
          to third party web sites contained on this Site. Such third party
          content and third party links have been provided solely for
          convenience purposes and you are encouraged to do your own independent
          research in confirming their accuracy. Abstract does not control or
          monitor such third party content or sites and does not endorse the
          content or the use of such web sites. If you choose to access
          non-Abstract sites through links on our pages, you accept
          responsibility for all related risks. Abstract will not be a party to
          or in any way be responsible for monitoring any transaction between
          you and third-party providers of products or services.
        </p>

        <h3 className="text-2xl font-semibold py-6">Limitation of Liability</h3>
        <p>
          In no event shall Abstract have any liability for any loss or damage
          of any kind incurred as a result of the use of the Site or reliance on
          any information provided on the Site. Use of and your reliance on any
          information on the Site is solely at your own risk.
        </p>

        <h3 className="text-2xl font-semibold py-6">Video Commentaries</h3>
        <p>
          The Site may contain video commentaries by users of Abstract products
          and/or services. These video commentaries are personal to those
          particular users and the views and opinions contained in those videos
          belong solely to the user and do not reflect Abstract’s views or
          opinions. Users who provide video commentary are not affiliated with
          Abstract and are not paid or otherwise compensated for their
          commentary. The video commentaries on the Site are reviewed by
          Abstract before being posted, and may be shortened for the sake of
          brevity.
        </p>

        <h3 className="text-2xl font-semibold py-6">
          Copyright and Trademarks
        </h3>

        <p>
          All content on the Site are copyright by Abstract and/or its users.
          Trademarks used on the Site are registered marks or trademarks of
          Abstract, a list of which is located at the Abstract Trademarks web
          page. All other product and company names used in the Site may be
          trademarks of their respective owners.
        </p>

        <h3 className="text-2xl font-semibold py-6">Choice of Law</h3>

        <p>
          Your access to and use of this Site, and these terms, are governed by
          and will be construed in accordance with the laws of California,
          without regard to conflicts of law provisions.
        </p>
      </article>
    </section>
  );
}

export default PageTermsOfUse