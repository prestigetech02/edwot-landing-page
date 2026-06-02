import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import BookDemoModal from '../components/BookDemoModal';

export interface DemoModalOptions {
  plan?: string;
}

interface DemoModalContextValue {
  openDemoModal: (options?: DemoModalOptions) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();

  const openDemoModal = useCallback((options?: DemoModalOptions) => {
    setPlan(options?.plan);
    setIsOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsOpen(false);
    setPlan(undefined);
  }, []);

  const value = useMemo(
    () => ({ openDemoModal, closeDemoModal }),
    [openDemoModal, closeDemoModal],
  );

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeDemoModal} plan={plan} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error('useDemoModal must be used within DemoModalProvider');
  }
  return ctx;
}
