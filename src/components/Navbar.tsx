import { Midnav } from "./Navbar/Midnav";
import { NavButton } from "./Navbar/NavButton";

export function Navbar () {
    return <div className="flex items-center gap-5 p-2 justify-around mt-2">
        <h1 className="font-bold text-2xl">Linkoid</h1>
        <Midnav />
        <NavButton />
    </div>
}

