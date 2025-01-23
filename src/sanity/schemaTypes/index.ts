import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import subscribe from './subscribe'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , subscribe],
}
