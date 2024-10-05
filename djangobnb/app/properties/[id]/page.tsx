import React from "react";
import Image from "next/image";
import ReservationSidebar from "@/app/components/property/ReservationSidebar";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/action";
import Link from "next/link";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}/`);
  const userId = await getUserId();
  console.log('user id',userId)
  console.log("Property", property);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
        <Image
          fill
          src={property.image_url}
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>

      <div className=" grid gird-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>

          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.guests} bedrooms -{" "}
            {property.guests} bathroom
          </span>

          <hr />

          <Link href={`/landlords/${property.landlord.id}`} className="py-6 flex items-center space-x-4">
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                alt="The user name"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </Link>

          <hr />

          <p className="mt-6 text-lg">{property.description}</p>
        </div>

        <ReservationSidebar property={property} userId={userId}/>
      </div>
    </main>
  );
};

export default PropertyDetailPage;
