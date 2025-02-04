import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import subscribe from './subscribe'
import order from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , subscribe, order],
}
