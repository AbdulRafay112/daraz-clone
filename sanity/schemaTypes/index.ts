import { type SchemaTypeDefinition } from 'sanity'
import { sales } from './sale'
import {category} from './category'
import {foryou} from './foryou'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sales , category , foryou],
}
