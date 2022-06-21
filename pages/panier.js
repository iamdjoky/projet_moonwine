import Image from 'next/image'

export default function Certification() {
    return ( 
        <div class="text-center w-50">

            <button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-4 py-3 rounded-round">X</button>


            <div class="mt-20">
                <Image  src="/Bouteille-Img.png" alt="site logo" width={140} height={180} />
            </div>
            

            <h1 class="mt-4 ml-24 text-center text-green text-48 w-50">VOTRE PANIER EST VIDE</h1>
            
            <button class="mt-4 text-center text-white bg-red text-14 px-4 py-2 rounded-2_5">DÉCOUVRIR NOS OFFRES</button>
                   
        </div>

     );
}