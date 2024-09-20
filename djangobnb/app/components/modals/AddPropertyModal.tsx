"use client";

import useAddPropertyModal from "@/app/hooks/usePropertyModal";
import LoginModal from "./LoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import Categories from "../addproperty/Categories";

const AddPropertyModal = () => {
  const addPropertymodal = useAddPropertyModal();

  //for next step show
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");

  // for data to be sent to backend
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedRooms] = useState("");
  const [dataBathRooms, setDataBathRooms] = useState("");
  const [dataGuest, setDataGuest] = useState("");

  console.log(dataTitle, dataDescription)

  const setCategory = (category: string) => {
    setDataCategory(category);
  };
  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="xl:mb-6 mb-2 text-2xl">Choose Category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full xl:h-[200px] h-[100px] p-2 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="xl:mb-6 mb-2 text-2xl">Details</h2>

          <div className="pt-3 xl:pb-6 md:pb-3 xl:space-y-4 md:space-y-0">
            {/* for data price */}
            <div className="flex flex-col space-y-2">
              <label>Price per night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-xl"
              />
            </div>
            
             {/* for bedroom*/}
             <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedRooms(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-xl"
              />
            </div>

             {/* for bath room */}
             <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathRooms}
                onChange={(e) => setDataBathRooms(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-xl"
              />
            </div>

             {/* for guests */}
             <div className="flex flex-col space-y-2">
              <label>Maximum number of guests</label>
              <input
                type="number"
                value={dataGuest}
                onChange={(e) => setDataGuest(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : (
        <>yes
        <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(3)}
          />
        </>
      )
      
      
      }
    </>
  );
  return (
    <Modal
      isOpen={addPropertymodal.isOpen}
      close={addPropertymodal.close}
      label="Add Property"
      content={content}
    />
  );
};

export default AddPropertyModal;
