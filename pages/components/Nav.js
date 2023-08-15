import Link from "next/link";

export default function Nav() {
    return (
        <header className=" bg-gray-950 flex p-4 pr-6 pl-6">
            <div className="lg:flex lg:flex-1 lg:justify-start">
                <p className="text-white">Logo</p>
            </div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2">
                <ul className="flex justify-between gap-10">
                    <li>
                        <Link href={'#'}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'}>
                            Acerca
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'}>
                            Servicios
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}