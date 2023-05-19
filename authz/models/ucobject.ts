/* eslint-disable camelcase */
// TODO: UC prefix
type UCObject = {
  id: string;

  type_id: string;

  alias: string;
};

type UCObjectType = {
  id: string;
  type_name: string;
};

export default UCObject;
export type { UCObjectType };
