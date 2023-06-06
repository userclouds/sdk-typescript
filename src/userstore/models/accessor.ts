import UserSelectorConfig from './user_selector';
import ResourceID from './resource_id';

/* eslint-disable camelcase */

type ColumnOutputConfig = {
  column: ResourceID;
  transformer: ResourceID;
};

type Accessor = {
  id: string;
  name: string;
  description: string;
  columns: ColumnOutputConfig[];
  access_policy: ResourceID;
  selector_config: UserSelectorConfig;
  version: number;
};

export default Accessor;
export type { ColumnOutputConfig };
