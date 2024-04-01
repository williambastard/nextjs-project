import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
