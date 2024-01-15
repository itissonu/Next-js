'use client';
import{headerLinks} from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navitems = () => {
    const pathname=usePathname()
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {headerLinks.map((tabs:{label:string,route:string},index:number)=>{
                const isActive=pathname===tabs.route;
                
                return(
                    <li className={`flex flex-col w-full items-start md:flex-row  ${isActive &&'text-lg font-bold text-primary-500'} `} key={index}>
                        <Link href={tabs.route}>{tabs.label}</Link>

                    </li>
                )
        })}
    </ul>
    
    
  )
}

export default Navitems