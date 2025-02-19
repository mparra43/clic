import { lazyImport } from '@/lib';
const { Card } = lazyImport(() => import('./card'), 'Card');
const { CarouselWhitGrid } = lazyImport(() => import('./carouselWithGrid'), 'CarouselWhitGrid');
const { ContactForm } = lazyImport(() => import('./contactForm'), 'ContactForm');
const { Footer } = lazyImport(() => import('./footer'), 'Footer');
const { Header } = lazyImport(() => import('./header'), 'Header');
const { Nav } = lazyImport(() => import('./nav'), 'Nav');
const { Services } = lazyImport(() => import('./services'), 'Services');
const { SingUp } = lazyImport(() => import('./signUp'), 'SingUp');
const { Slider } = lazyImport(() => import('./slider'), 'Slider');
const { AlliesCampaign } = lazyImport(() => import('./alliesCampaign'), 'AlliesCampaign');


export const Transversal = {
    AlliesCampaign,
    Card,
    CarouselWhitGrid,
    ContactForm,
    Footer,
    Header,
    Nav,
    Services,
    SingUp,
    Slider
}