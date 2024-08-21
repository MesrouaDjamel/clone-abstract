import React from 'react'

const Pricing = ({title}:{title:string}) => {
  return (
    <article className='pt-40 py-6 pb-36 flex flex-col items-center'>
        <h1 className='text-5xl pb-16 text-center'>
          {title}
        </h1>

        <button className='text-xl px-8 py-4 text-white rounded-lg bg-Blue hover:bg-btnHover'>
            View Pricing Plans
        </button>
    </article>
  )
}

export default Pricing