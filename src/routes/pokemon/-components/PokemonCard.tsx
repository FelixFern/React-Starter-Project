import { GetAllPokemonData } from "@/types";

const PokemonCard = ({ name, url }: GetAllPokemonData) => {
    return (
        <div className='p-2 border-[1px] border-red-200'>
            <h1 className='font-bold'>
                {name.slice(0, 1).toUpperCase()}
                {name.slice(1)}
            </h1>
            <p>{url}</p>
        </div>
    );
};

export default PokemonCard;
