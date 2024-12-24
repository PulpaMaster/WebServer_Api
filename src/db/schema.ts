import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const postsTable = pgTable('posts', {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 text: varchar({ length: 255 }).notNull(),
 age: integer().notNull(),
})