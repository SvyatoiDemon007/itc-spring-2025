import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentFigure: 'knight',
  knightPosition: { row: 0, column: 0 },
  rookPosition: { row: 3, column: 7 },
};

const getKnightMoves = (position) => {
  const moves = [];
  const deltas = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];
  for (const [dr, dc] of deltas) {
    const newRow = position.row + dr;
    const newCol = position.column + dc;
    if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 8) {
      moves.push({ row: newRow, column: newCol });
    }
  }
  return moves;
};

const getRookMoves = (position) => {
  const moves = [];

  // Горизонталь
  for (let c = 0; c < 8; c++) {
    if (c !== position.column) moves.push({ row: position.row, column: c });
  }

  // Вертикаль
  for (let r = 0; r < 4; r++) {
    if (r !== position.row) moves.push({ row: r, column: position.column });
  }

  return moves;
};

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    setToPosition: (state, action) => {
      const { figure, row, column } = action.payload;
      if (figure === 'knight') {
        state.knightPosition = { row, column };
        state.currentFigure = 'rook';
      } else if (figure === 'rook') {
        state.rookPosition = { row, column };
        state.currentFigure = 'knight';
      }
    },
  },
  selectors: {
    getCurrentFigure: (state) => state.currentFigure,
    getRookPosition: (state) => state.rookPosition,
    getKnightPosition: (state) => state.knightPosition,
    getValidMoves: (state) => {
      const figure = state.currentFigure;
      const knightPos = state.knightPosition;
      const rookPos = state.rookPosition;

      let moves = [];
      let dangerZones = [];

      if (figure === 'knight') {
        moves = getKnightMoves(knightPos);
        dangerZones = getRookMoves(rookPos);
      } else if (figure === 'rook') {
        moves = getRookMoves(rookPos);
        dangerZones = getKnightMoves(knightPos);
      }

      // Фильтрация ходов, которые под ударом
      return moves.filter(
        (move) =>
          !dangerZones.some(
            (danger) =>
              danger.row === move.row && danger.column === move.column
          )
      );
    },
  },
});
