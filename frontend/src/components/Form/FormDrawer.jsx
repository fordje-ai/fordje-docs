import * as React from 'react';

import { useDisclosure } from '@/hooks/useDisclosure';

import { Button } from '../Elements/Button';
import { Drawer } from '../Elements/Drawer';


export const FormDrawer = ({
  title,
  children,
  isDone,
  triggerButton,
  submitButton,
  size = 'md',
}) => {
  const { close, open, isOpen } = useDisclosure();

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  return (
    <>
      {React.cloneElement(triggerButton, { onClick: open })}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={title}
        size={size}
        renderFooter={() => (
          <>
            <Button variant="inverse" size="sm" onClick={close}>
              Cancel
            </Button>
            {submitButton}
          </>
        )}
      >
        {children}
      </Drawer>
    </>
  );
};
