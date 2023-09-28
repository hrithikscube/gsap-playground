import React, { Fragment, useEffect, useState } from 'react'
//gsap imports 

import gsap from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const cardStyles = {
  borderRadius: '12px',
  background: 'rgba(141, 150, 233, 0.21)',
  boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.15)'
}

const iconsArray = [
  {
    name: 'gear',
    icon: '/icons/gear.svg',
    activeIcon: '/icons/activeGear.svg',
    position: 'absolute -top-5'
  },
  {
    name: 'paw',
    icon: '/icons/paw.svg',
    activeIcon: '/icons/activePaw.svg',
    position: 'absolute -right-5'
  },
  {
    name: 'star',
    icon: '/icons/star.svg',
    activeIcon: '/icons/activeStar.svg',
    position: 'absolute -bottom-5'

  },
  {
    name: 'garage',
    icon: '/icons/garage.svg',
    activeIcon: '/icons/activeGarage.svg',
    position: 'absolute -left-5'

  },
]

const ScaleAnimation = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let ctx = gsap.context(() => {
      gsap.to('.parent-container', {
        scrollTrigger: {
          trigger: '.parent-container',
          pin: '.parent-container',
          start: 'top 7%',
          end: `250% bottom`,
          pinSpacing: true,
          scrub: 1,
          // snap: 1 / 3,
          onUpdate: (self) => {
            console.log(self.progress)

            if (self.progress > 0 && self.progress <= 0.25) {
              setActiveIndex(0)
            }
            if (self.progress > 0.25 && self.progress <= 0.50) {
              setActiveIndex(1)
            }
            if (self.progress > 0.50 && self.progress <= 0.75) {
              setActiveIndex(2)
            }
            if (self.progress > 0.75 && self.progress <= 1) {
              setActiveIndex(3)
            }
          }
        },
      })
    })

    setIsExecute(true)

    return () => ctx.revert()

  }, [])

  const [isExecute, setIsExecute] = useState(false)

  useEffect(() => {

    if (isExecute) {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

      gsap.set('.card-fade-in-out', {
        opacity: 0,
      })

      gsap.to('.card-fade-in-out', {
        opacity: 50,
        duration: 200,
        ease: 'power1.easeInOut'
      })
    }
    else {
      setIsExecute(true)
    }

  }, [activeIndex, isExecute])


  const cardInfo = [
    {
      title: 'Regulatory Approvals',
      description: 'Following the ICH guidelines have become bread and butter for our employees.'
    },
    {
      title: 'Safe & Sustainable Operations',
      description: 'We adopt sustainable strategies such as green chemistry, waste reduction, energy efficiency, responsible sourcing, eco-friendly packaging, and EPR in our operations.'
    },
    {
      title: 'Operational Excellence',
      description: 'Efficient utilization of resources, time, and labor so waste can be reduced and even eliminated.'
    },
    {
      title: 'Manufacturing Capability',
      description: 'We manufacture from the SMs giving us the highest advantage of not being dependent.'
    },

  ]

  return (
    <Fragment>

      <div className='h-screen w-full bg-green-600 flex items-center justify-center'>
        <h1 className='lg:text-6xl text-4xl font-medium text-white'>Scroll Down</h1>
      </div>
      {/* Animation Frame */}
      <div className='lg:p-10 p-5 parent-container'>

        <div className='background-inkblue p-5 rounded-xl grid grid-cols-2 items-center px-10 animation-frame'>
          {/* Animate frame */}
          <div className='border border-dashed border-white rounded-full w-[500px] h-[500px] bg-transparent flex items-center justify-center animation-frame' >
            <div className='border border-dashed border-white rounded-full w-[400px] h-[400px] bg-transparent flex items-center justify-center '>
              <div className='border border-dashed border-white rounded-full w-[300px] h-[300px] bg-transparent flex items-center justify-center relative' >

                {React.Children.toArray(iconsArray.map((item, index) => (
                  <img
                    src={activeIndex === index ? item.activeIcon : item.icon}
                    alt={item.icon}
                    className={`w-[45px] h-[45px] ${item.position} ${activeIndex === index ? 'scale-[1.8] transition-all duration-700' : 'scale-1 transition-all duration-700'}`} />
                )))}

                <div className='border  border-dashed border-white rounded-full w-[200px] h-[200px] bg-transparent flex items-center justify-center' >

                </div>

              </div>
            </div>
          </div>

          {/* Content */}

          <div className='lg:w-[450px] flex flex-col gap-2'>
            <p className='text-base text-white uppercase tracking-wide'>Why Choose us</p>
            <p className='lg:text-xl text-lg font-medium tracking-wide text-white'>Delivering Excellence in <br /> Pharmaceutical Manufacturing</p>
            <p className='text-base font-thin text-white'>Trust us for pharma excellence: quality, expertise, customer-centricity.</p>

            <div className='flex items-start gap-5'>

              <div className='flex flex-col gap-2'>
                {
                  React.Children.toArray([0, 1, 2, 3].map((item, index) => (
                    <div className={`w-1 h-11 rounded-lg transition-all duration-700 ${activeIndex === index ? 'bg-[#4EE287]' : ' bg-[#dfdfdf]'}`} />
                  )))
                }
              </div>

              {
                /*
                <div style={cardStyles} className='p-5 rounded-xl w-full h-[200px] flex flex-col items-start justify-center card-fade-in-out'>
                <h2 className="text-lg font-medium text-white">{cardInfo[activeIndex].title}</h2>
                <p className='text-white text-base font-thin'>{cardInfo[activeIndex].description}</p>
              </div>
                */
              }

              <div>
                {React.Children.toArray([0, 1, 2, 3].map((item, index) => (
                  <>
                    {
                      activeIndex === index && (
                        <div style={cardStyles} className='p-5 rounded-xl w-full h-[200px] flex flex-col items-start justify-center card-fade-in-out'>
                          <h2 className="text-lg font-medium text-white">{cardInfo[activeIndex].title}</h2>
                          <p className='text-white text-base font-thin'>{cardInfo[activeIndex].description}</p>
                        </div>
                      )
                    }
                  </>
                )))}
              </div>


            </div>
          </div>

        </div>

      </div>

      <div className='h-screen w-full bg-green-600 flex items-center justify-center'>
        <h1 className='lg:text-6xl text-4xl font-medium text-white'>Bye Now</h1>
      </div>


    </Fragment>
  )
}

export default ScaleAnimation