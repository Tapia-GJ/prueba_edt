
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface Sort {
    typeSelected: string;
    desc: boolean;
}
interface FilterProps {
    sort: Sort;
    setSort: React.Dispatch<React.SetStateAction<Sort>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export const Filter = ({ sort, setSort, setSearch }: FilterProps) => {
    const eliminarFiltros = () => {
        setSearch("");
        setSort({
            typeSelected: "",
            desc: true,
        });
    };
    const ratingSortHandler = () => {
        setSort({
            typeSelected: "Rating",
            desc: !sort.desc,
        });
    };
    const nameSortHandler = () => {
        setSort({
            typeSelected: "Name",
            desc: !sort.desc,
        });
    };
    return (
        <>
            <div className="flex flex-wrap items-center gap-4 relative">

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                            Sort
                            {sort.desc ? <ArrowDownWideNarrow size={18} /> : <ArrowUpNarrowWide size={18} />}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="start"
                        side="bottom"
                        className="
    bg-white
    w-48
    max-w-[90vw]
    overflow-hidden
  "
                    >


                        <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem onClick={ratingSortHandler}>
                            Rating
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={nameSortHandler}>
                            Nombre
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={eliminarFiltros}
                            className="text-red-600"
                        >
                            Limpiar filtros
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
