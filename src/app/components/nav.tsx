import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  navData: {
    link: string;
    iconCls: string;
    text: string;
  }[];
}

export default function Nav({ navData }: NavProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {navData.map((n, index) => {
          return (
            <li key={index}>
              <Link
                href={n.link}
                className={
                  pathname === n.link ? `active ${n.iconCls}` : n.iconCls
                }
              >
                {n.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
