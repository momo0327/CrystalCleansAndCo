import React from 'react'
import { ScrollVelocityRow, ScrollVelocityContainer } from "@/components/VelocityScroll"

function ScrollDemo() {
  return (
    <div className='flex flex-col justify-center lg:py-24 bg-[#002657] text-blue-50/40'>
      <ScrollVelocityContainer className="text-4xl md:text-7xl font-semibold">
        <ScrollVelocityRow  direction={1} className='lg:py-4 py-3 mt-2'>
          <span className="font-bold mr-8 ">Fönsterputsning</span>
          <span className="font-medium mr-8 italic font-serif">Professionell</span>
          <span className="font-bold mr-8 ">Service</span>
          <span className="font-medium mr-8 italic font-serif">Kvalitet</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow  direction={-1} className='lg:py-4 py-3'>
          <span className="font-medium mr-8 italic font-serif">Hemstäd</span>
          <span className="font-bold mr-8">Städning</span>
          <span className="font-medium mr-8  italic font-serif">Hjälp</span>
          <span className="font-bold mr-8">Trygghet</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      
      <ScrollVelocityContainer className="text-4xl md:text-7xl font-semibold">
        <ScrollVelocityRow  direction={1} className='lg:py-4 py-3'>
          <span className="font-medium mr-8 italic font-serif">Fönsterputsning</span>
          <span className="font-bold mr-8">Professionell</span>
          <span className="font-medium mr-8 italic font-serif">Service</span>
          <span className="font-bold mr-8">Kvalitet</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow  direction={-1} className='lg:py-4 py-3 mb-2'>
          <span className="font-bold mr-8">Hemstäd</span>
          <span className="font-medium mr-8 italic font-serif">Städning</span>
          <span className="font-bold mr-8">Hjälp</span>
          <span className="font-medium mr-8 italic font-serif">Trygghet</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}

export default ScrollDemo