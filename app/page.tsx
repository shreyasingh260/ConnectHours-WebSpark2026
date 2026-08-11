import {redirect} from 'next/navigation';import {getSession,roleHome} from '@/lib/auth';export default function Home(){const s=getSession();redirect(s?roleHome(s.role):'/login')}
