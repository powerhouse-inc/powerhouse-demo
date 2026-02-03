import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useDocumentById,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  ClickerGameDocument,
  ClickerGameAction,
} from "powerhouse-demo/document-models/clicker-game";
import { isClickerGameDocument } from "./gen/document-schema.js";

/** Hook to get a ClickerGame document by its id */
export function useClickerGameDocumentById(
  documentId: string | null | undefined,
):
  | [ClickerGameDocument, DocumentDispatch<ClickerGameAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isClickerGameDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected ClickerGame document */
export function useSelectedClickerGameDocument():
  | [ClickerGameDocument, DocumentDispatch<ClickerGameAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useSelectedDocument();
  if (!isClickerGameDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get all ClickerGame documents in the selected drive */
export function useClickerGameDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isClickerGameDocument);
}

/** Hook to get all ClickerGame documents in the selected folder */
export function useClickerGameDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isClickerGameDocument);
}
