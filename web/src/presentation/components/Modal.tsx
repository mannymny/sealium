import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { modalStyles } from '@/presentation/components/Modal.styles';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ onClose, children, title }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={modalStyles.overlay}>
      <div
        className={modalStyles.backdrop}
        onClick={onClose}
      />

      <div className={modalStyles.content}>
        {title && (
          <div className={modalStyles.header}>
            <h2 className={modalStyles.title}>{title}</h2>
            <button
              onClick={onClose}
              className={modalStyles.closeButton}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className={title ? modalStyles.contentBody : modalStyles.contentBodyPadded}>
          {!title && (
            <button
              onClick={onClose}
              className={modalStyles.closeFloating}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
