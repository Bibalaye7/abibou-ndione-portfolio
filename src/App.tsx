import { Toaster } from 'sonner';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import Index from './pages/Index';

const App = () => (
  <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <Index />
      <Toaster position="bottom-right" richColors />
    </MotionConfig>
  </LazyMotion>
);

export default App;
