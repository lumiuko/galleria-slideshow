import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import data from '../data.json'

export default function SlideshowItem(props) {
  const [isLightbox, setIsLightbox] = useState(false)
  const item = data[props.currentSlide]

  return (
    <main className="mt-6 xl:container box-content px-6 mb-[4.25rem] flex flex-col xl:flex-row xl:justify-between md:mt-10 xl:mt-[6.25rem] xl:mb-[8.75rem]">
      <div className="flex flex-col md:flex-row">
        <div className="relative shrink-0">
          <button
            className="absolute bg-btn-black left-4 top-4 px-4 py-[0.875rem] text-white flex items-center hover:bg-btn-black-hover transition-colors md:bottom-4 md:top-[unset]"
            onClick={() => setIsLightbox(true)}
          >
            <img src="/assets/shared/icon-view-image.svg" alt="View icon" aria-hidden="true" />
            <span className="ml-[0.875rem] uppercase text-btn-md font-bold tracking-btn-md">View image</span>
          </button>
          <picture>
            <source media="(min-width: 768px)" srcSet={item.images.hero.large} />
            <img src={item.images.hero.small} alt={item.name} className="md:max-h-[560px]" />
          </picture>
        </div>
        <div className="relative mt-[-3.125rem] md:mt-0 flex flex-col md:ml-[-14.5rem] xl:justify-between xl:-ml-16">
          <div className="bg-white p-6 bottom-0 max-w-[280px] md:p-0 md:pl-16 md:pb-16 xl:pr-10 xl:max-w-[445px]">
            <h1 className="font-bold text-heading-2 leading-heading-2 md:text-heading-1 md:leading-heading-1">
              {item.name}
            </h1>
            <div className="mt-2 xl:mt-6 text-subhead-1 leading-subhead-1 text-dark-gray">{item.artist.name}</div>
          </div>
          <img
            className="ml-4 max-w-[64px] md:max-w-[128px] md:ml-[16.375rem] xl:ml-[5.875rem] xl:-mb-16"
            src={item.artist.image}
            alt={item.artist.name}
          />
        </div>
      </div>
      <div className="relative mt-[6.125rem] md:mt-[8.75rem] md:ml-[7.125rem] max-w-[572px] xl:ml-0 xl:max-w-[476px] xl:mt-[7.125rem]">
        <span className="text-display-sm leading-display-sm md:text-display md:leading-display font-bold text-light-gray absolute right-0 top-[-74px] -z-10 md:left-0">
          {item.year}
        </span>
        <p className="text-dark-gray text-body leading-body mb-[4.25rem] xl:mr-[7.75rem]">{item.description}</p>
        <a
          href={item.source}
          className="uppercase font-bold text-btn-sm tracking-btn-sm text-dark-gray underline hover:text-black transition-colors"
          target="_blank"
        >
          Go to source
        </a>
      </div>
      <CSSTransition in={isLightbox} timeout={200} classNames="fade" unmountOnExit>
        <div className="fixed top-0 left-0 w-full h-full bg-overlay">
          <div className="fixed inset-0 m-auto text-white px-6 flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/3">
            <button
              className="uppercase tracking-[3px] mb-8 text-body self-end hover:opacity-25 transition-opacity"
              onClick={() => setIsLightbox(false)}
            >
              Close
            </button>
            <img src={item.images.gallery} alt="Gallery image" className="w-full" />
          </div>
        </div>
      </CSSTransition>
    </main>
  )
}
