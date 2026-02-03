/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect } from "vitest";
import { generateMock } from "@powerhousedao/codegen";
import {
  reducer,
  utils,
  isClickerGameDocument,
  addPlayer,
  AddPlayerInputSchema,
  click,
  ClickInputSchema,
  removePlayer,
  RemovePlayerInputSchema,
  resetGame,
  ResetGameInputSchema,
  startGame,
  StartGameInputSchema,
  stopGame,
  StopGameInputSchema,
} from "powerhouse-demo/document-models/clicker-game";

describe("Game Operations", () => {
  it("should handle addPlayer operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddPlayerInputSchema());

    const updatedDocument = reducer(document, addPlayer(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("ADD_PLAYER");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle click operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ClickInputSchema());

    const updatedDocument = reducer(document, click(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("CLICK");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removePlayer operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemovePlayerInputSchema());

    const updatedDocument = reducer(document, removePlayer(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_PLAYER",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle resetGame operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ResetGameInputSchema());

    const updatedDocument = reducer(document, resetGame(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("RESET_GAME");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle startGame operation", () => {
    const document = utils.createDocument();
    const input = generateMock(StartGameInputSchema());

    const updatedDocument = reducer(document, startGame(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("START_GAME");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle stopGame operation", () => {
    const document = utils.createDocument();
    const input = generateMock(StopGameInputSchema());

    const updatedDocument = reducer(document, stopGame(input));

    expect(isClickerGameDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("STOP_GAME");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
