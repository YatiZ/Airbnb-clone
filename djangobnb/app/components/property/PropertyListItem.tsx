import React from 'react'
import Image from 'next/image'
import { PropertyType } from '@/types'
import { useRouter } from 'next/navigation'

interface PropertyProps {
  property: PropertyType
}

const PropertyListItem:React.FC<PropertyProps> = ({property}) => {
  const router = useRouter();
  return (
    <div className='cursor-pointer' onClick={()=> router.push(`/properties/${property.id}`)}>
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image fill priority src={property.image_url} alt='beach_img' sizes='(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px'
            className='hover:scale-110 object-cover transition h-full w-full'
            />
        </div>
        <div className="mt-2">
            <p className="text-lg font-bold">{property.title}</p>
        </div>
        <div className="mt-2">
            <p className="text-sm font-bold"><strong>${property.price_per_night}</strong></p>
        </div>
    </div>
  )
}

export default PropertyListItem