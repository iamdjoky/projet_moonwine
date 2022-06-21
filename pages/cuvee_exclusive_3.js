import Image from 'next/image'

export default function CuveeExclusive3() {
    return ( 
        <div class="ml-6">

            <button class="absolute top-4 left-4 text-center text-green border-solid border-2 border-green border-opacity-10 text-18 px-4 py-3 rounded-round">X</button>

            <h3 class="mt-20 text-16">3/4</h3>

            <h1 class="mt-4 text-40">UN PACKAGING CONÇU PAR UN ARTISTE</h1>

            <p class="mt-2 text-16 ">Des artistes de tout horizon travaillent sur le design des box et les étiquettes des bouteilles, 
            sans aucune limite et avec toute leur liberté d’expression. 
            Une box au design unique, à collectionner.</p>

            <div class="mt-8 inline-block">
                <Image  src="/packaging.svg" alt="Cuvée Exclusive" width={280} height={180} />
            </div>

            <div class="inline-block">
                <Image  src="/packaging2.svg" alt="Cuvée Exclusive" width={300} height={180} />
            </div>
        <div>
            <div class="absolute left-6 mt-6 inline-block">
                <Image  src="/ArrowGauche.svg" alt="Cuvée Exclusive" width={80} height={120} />
            </div>

            <div class=" absolute left-24 mt-6 inline-block">
                <Image  src="/ArrowDroite.svg" alt="Cuvée Exclusive" width={80} height={120} />
            </div>
            
        </div>
            
        </div>

     );
}