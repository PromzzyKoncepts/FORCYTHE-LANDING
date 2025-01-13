import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import "../stylesheets/embla.css"

const EmblaCarousel = (props) => {
  const { slides, options, direction } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className="embla  overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container flex`}>
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number object-top ">
                <img src={item} className="object-top"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default EmblaCarousel
