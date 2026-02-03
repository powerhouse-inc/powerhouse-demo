import type { DocumentModelModule } from "document-model";
import { createState } from "document-model";
import { defaultBaseState } from "document-model/core";
import type { ClickerGamePHState } from "powerhouse-demo/document-models/clicker-game";
import {
  actions,
  documentModel,
  reducer,
  utils,
} from "powerhouse-demo/document-models/clicker-game";

/** Document model module for the Todo List document type */
export const ClickerGame: DocumentModelModule<ClickerGamePHState> = {
  reducer,
  actions,
  utils,
  documentModel: createState(defaultBaseState(), documentModel),
};
