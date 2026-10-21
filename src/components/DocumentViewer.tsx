import { useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ViewedDocument {
  src: string;
  title: string;
}

// Affiche une attestation en grand pour consultation : pas de lien de téléchargement,
// clic droit et glisser-déposer désactivés sur l'image
export function useDocumentViewer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [doc, setDoc] = useState<ViewedDocument | null>(null);

  const openDocument = (next: ViewedDocument) => {
    setDoc(next);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const viewer = (
    <dialog
      ref={dialogRef}
      onClose={() => setDoc(null)}
      onClick={(e) => e.target === e.currentTarget && close()}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={doc ? `Attestation ${doc.title}` : undefined}
      className="m-auto w-[94vw] max-w-[1100px] max-h-[92vh] overflow-visible border-0 bg-transparent p-0 outline-hidden backdrop:bg-black/80"
    >
      {doc && (
        <figure className="relative select-none">
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"
          >
            <X className="size-5" />
          </button>
          <img
            src={doc.src}
            alt={`Attestation ${doc.title}`}
            draggable={false}
            className="pointer-events-none max-h-[82vh] w-full rounded-lg bg-white object-contain"
          />
          <figcaption className="mt-3 text-center text-sm text-white">
            {doc.title} — consultation uniquement
          </figcaption>
        </figure>
      )}
    </dialog>
  );

  return { openDocument, viewer };
}
