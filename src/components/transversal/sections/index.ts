import { lazyImport } from '@/lib';
const { Footer } = lazyImport(() => import('./footer'), 'Footer');
const { Header } = lazyImport(() => import('./header'), 'Header');
const { SingUp } = lazyImport(() => import('./signUp'), 'SingUp');

export const Transversal = {
    Footer,
    Header,
    SingUp
}