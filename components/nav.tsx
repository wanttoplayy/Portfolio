import Link from "next/link";

export const NavPort = () => {
  return (
    <nav className="flex items-center justify-around h-[17%]">
      <div className="text-[2rem] hover:cursor-default"> Vasin Sukchit</div>
      <div>
        <ul className="flex gap-8 decoration-slate-500 text-base">
          <li>
            <Link
              href="/about"
              className="text-black no-underline decoration-white hover:text-slate-500 hover:underline hover:underline-offset-8 hover:decoration-slate-500"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-black no-underline decoration-white hover:text-slate-500 hover:underline hover:underline-offset-8 hover:decoration-slate-500"
            >
              experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-black no-underline decoration-white hover:text-slate-500 hover:underline hover:underline-offset-8 hover:decoration-slate-500"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black no-underline decoration-white hover:text-slate-500 hover:underline hover:underline-offset-8 hover:decoration-slate-500"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
