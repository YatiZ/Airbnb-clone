import Image from "next/image";
interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> =({
    dataCategory,
    setCategory
})=>{
   return (
    <>
     <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
     <div onClick={()=>setCategory('Beach')} className={`pb-4 fle  flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach'? 'border-gray-800':'border-white'} hover:opacity-100 hover:border-gray-200 opacity-60`}>
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Beach</span>
        </div>

        <div onClick={()=>setCategory('Villa')} className={`pb-4 fle  flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villa'? 'border-gray-800':'border-white'} hover:opacity-100 hover:border-gray-200 opacity-60`}>
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Villa</span>
        </div>

        <div onClick={()=>setCategory('Cabins')} className={`pb-4 fle  flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins'? 'border-gray-800':'border-white'} hover:opacity-100 hover:border-gray-200 opacity-60`}>
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Cabins</span>
        </div>

        <div onClick={()=>setCategory('Tiny homes')} className={`pb-4 fle  flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes'? 'border-gray-800':'border-white'} hover:opacity-100 hover:border-gray-200 opacity-60`}>
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Tiny homes</span>
        </div>
     </div>
    </>
   )
}

export default Categories;