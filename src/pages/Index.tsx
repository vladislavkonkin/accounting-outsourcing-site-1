import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Founder from '@/components/Founder';
import OrderCheck from '@/components/OrderCheck';
import Faq from '@/components/Faq';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
    <Header />
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <Founder />
      <OrderCheck />
      <Faq />
      <Contacts />
    </main>
    <Footer />
  </div>
);

export default Index;
