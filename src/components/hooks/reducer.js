const reducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        pokemon: action.pokemon,
        dataUrl: action.dataUrl,
        load: false,
      };
    case "LOAD":
      return { ...state, load: true };
    case "PAGE":
      return { ...state, page: state.page + 10, load: true };
    case "SEARCHE":
      return {
        ...state,
        searche: action.searche,
      };
    case "CHANGE":
      return {
        ...state,
        searche: [],
      };
    default:
      state;
  }
};
export { reducer };
