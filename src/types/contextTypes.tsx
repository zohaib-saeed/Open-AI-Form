export type compModeValues = {
  compInput: string;
  setCompInput: React.Dispatch<React.SetStateAction<string>>;
  mode: string | null;
  setMode: React.Dispatch<React.SetStateAction<string | null>>;
  compMode: CompMode;
  compTemp: number;
  setCompTemp: React.Dispatch<React.SetStateAction<number>>;
  compModel: string | null;
  setCompModel: React.Dispatch<React.SetStateAction<string | null>>;
  compMaxLength: number;
  setCompMaxLength: React.Dispatch<React.SetStateAction<number>>;
  compStopSeq: string;
  setCompStopSeq: React.Dispatch<React.SetStateAction<string>>;
  compTopP: number;
  setCompTopP: React.Dispatch<React.SetStateAction<number>>;
  compFreqPenalty: number;
  setCompFreqPenalty: React.Dispatch<React.SetStateAction<number>>;
  compPresencePenalty: number;
  setCompPresencePenalty: React.Dispatch<React.SetStateAction<number>>;
  compBestOf: number;
  setCompBestOf: React.Dispatch<React.SetStateAction<number>>;
  startText: string;
  setStartText: React.Dispatch<React.SetStateAction<string>>;
  restartText: string;
  setRestartText: React.Dispatch<React.SetStateAction<string>>;
  probabilities: string | null;
  setProbabilities: React.Dispatch<React.SetStateAction<string | null>>;
  setCompMode: React.Dispatch<
    React.SetStateAction<{
      input: string;
      model: string | null;
      tempreture: number;
      maxLength: number;
      stopSequence: string;
      topP: number;
      frequencyPenalty: number;
      presencePenalty: number;
      bestOf: number;
      insertStartText: string;
      insertRestartText: string;
      probabilities: string | null;
    }>
  >;
};

export type insertModeValues = {
  insertInput: string;
  setInsertInput: React.Dispatch<React.SetStateAction<string>>;
  insertTemp: number;
  setInsertTemp: React.Dispatch<React.SetStateAction<number>>;
  insertModel: string | null;
  setInsertModel: React.Dispatch<React.SetStateAction<string | null>>;
  insertMaxLength: number;
  setInsertMaxLength: React.Dispatch<React.SetStateAction<number>>;
  insertStopSeq: string;
  setInsertStopSeq: React.Dispatch<React.SetStateAction<string>>;
  insertTopP: number;
  setInsertTopP: React.Dispatch<React.SetStateAction<number>>;
  insertFreqPenalty: number;
  setInsertFreqPenalty: React.Dispatch<React.SetStateAction<number>>;
  insertPresencePenalty: number;
  setInsertPresencePenalty: React.Dispatch<React.SetStateAction<number>>;
  insertBestOf: number;
  setInsertBestOf: React.Dispatch<React.SetStateAction<number>>;
  insertMode: InsertMode;
  setInsertMode: React.Dispatch<
    React.SetStateAction<{
      input: string;
      model: string | null;
      tempreture: number;
      maxLength: number;
      stopSequence: string;
      topP: number;
      frequencyPenalty: number;
      presencePenalty: number;
      bestOf: number;
    }>
  >;
};

export type editModeValues = {
  // edit mode types
  editInput: string;
  setEditInput: React.Dispatch<React.SetStateAction<string>>;
  editTemp: number;
  setEditTemp: React.Dispatch<React.SetStateAction<number>>;
  editModel: string | null;
  setEditModel: React.Dispatch<React.SetStateAction<string | null>>;
  editStopSeq: string;
  setEditStopSeq: React.Dispatch<React.SetStateAction<string>>;
  editTopP: number;
  setEditTopP: React.Dispatch<React.SetStateAction<number>>;
  editMode: EditMode;
  setEditMode: React.Dispatch<
    React.SetStateAction<{
      input: string;
      model: string | null;
      tempreture: number;
      stopSequence: string;
      topP: number;
    }>
  >;
};

type CompMode = {
  mode: string | null;
  input: string;
  model: string | null;
  tempreture: number;
  maxLength: number;
  stopSequence: string;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  bestOf: number;
  insertStartText: string;
  insertRestartText: string;
  probabilities: string | null;
};

type InsertMode = {
  mode: string | null;

  model: string | null;
  tempreture: number;
  maxLength: number;
  stopSequence: string;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  bestOf: number;
};

type EditMode = {
  mode: string | null;

  model: string | null;
  tempreture: number;
  stopSequence: string;
  topP: number;
  instructions: string;
};

export type ContextType = {
  compInput: string;
  setCompInput: React.Dispatch<React.SetStateAction<string>>;
  mode: string | null;
  setMode: React.Dispatch<React.SetStateAction<string | null>>;
  compMode: CompMode;
  compTemp: number;
  setCompTemp: React.Dispatch<React.SetStateAction<number>>;
  compModel: string | null;
  setCompModel: React.Dispatch<React.SetStateAction<string | null>>;
  compMaxLength: number;
  setCompMaxLength: React.Dispatch<React.SetStateAction<number>>;
  compStopSeq: string;
  setCompStopSeq: React.Dispatch<React.SetStateAction<string>>;
  compTopP: number;
  setCompTopP: React.Dispatch<React.SetStateAction<number>>;
  compFreqPenalty: number;
  setCompFreqPenalty: React.Dispatch<React.SetStateAction<number>>;
  compPresencePenalty: number;
  setCompPresencePenalty: React.Dispatch<React.SetStateAction<number>>;
  compBestOf: number;
  setCompBestOf: React.Dispatch<React.SetStateAction<number>>;
  startText: string;
  setStartText: React.Dispatch<React.SetStateAction<string>>;
  restartText: string;
  setRestartText: React.Dispatch<React.SetStateAction<string>>;
  probabilities: string | null;
  setProbabilities: React.Dispatch<React.SetStateAction<string | null>>;
  setCompMode: React.Dispatch<
    React.SetStateAction<{
      mode: string | null;

      input: string;
      model: string | null;
      tempreture: number;
      maxLength: number;
      stopSequence: string;
      topP: number;
      frequencyPenalty: number;
      presencePenalty: number;
      bestOf: number;
      insertStartText: string;
      insertRestartText: string;
      probabilities: string | null;
    }>
  >;
  // insert mode types
  insertInput: string;
  setInsertInput: React.Dispatch<React.SetStateAction<string>>;
  insertTemp: number;
  setInsertTemp: React.Dispatch<React.SetStateAction<number>>;
  insertModel: string | null;
  setInsertModel: React.Dispatch<React.SetStateAction<string | null>>;
  insertMaxLength: number;
  setInsertMaxLength: React.Dispatch<React.SetStateAction<number>>;
  insertStopSeq: string;
  setInsertStopSeq: React.Dispatch<React.SetStateAction<string>>;
  insertTopP: number;
  setInsertTopP: React.Dispatch<React.SetStateAction<number>>;
  insertFreqPenalty: number;
  setInsertFreqPenalty: React.Dispatch<React.SetStateAction<number>>;
  insertPresencePenalty: number;
  setInsertPresencePenalty: React.Dispatch<React.SetStateAction<number>>;
  insertBestOf: number;
  setInsertBestOf: React.Dispatch<React.SetStateAction<number>>;
  insertMode: InsertMode;
  setInsertMode: React.Dispatch<
    React.SetStateAction<{
      mode: string | null;

      input: string;
      model: string | null;
      tempreture: number;
      maxLength: number;
      stopSequence: string;
      topP: number;
      frequencyPenalty: number;
      presencePenalty: number;
      bestOf: number;
    }>
  >;
  // edit mode types
  editInstructions: string;
  setEditInstructions: React.Dispatch<React.SetStateAction<string>>;
  editInput: string;
  setEditInput: React.Dispatch<React.SetStateAction<string>>;
  editTemp: number;
  setEditTemp: React.Dispatch<React.SetStateAction<number>>;
  editModel: string | null;
  setEditModel: React.Dispatch<React.SetStateAction<string | null>>;
  editStopSeq: string;
  setEditStopSeq: React.Dispatch<React.SetStateAction<string>>;
  editTopP: number;
  setEditTopP: React.Dispatch<React.SetStateAction<number>>;
  editMode: EditMode;
  setEditMode: React.Dispatch<
    React.SetStateAction<{
      mode: string | null;
      input: string;
      model: string | null;
      tempreture: number;
      stopSequence: string;
      topP: number;
      instructions: string;
    }>
  >;
};
