import UserSelectorConfig from './user_selector';
/* eslint-disable camelcase */
type Mutator = {
  id: string;
  name: string;
  description: string;
  column_names: string[];
  access_policy_id: string;
  validation_policy_id: string;
  selector_config: UserSelectorConfig;
  version: number;
};

export default Mutator;
