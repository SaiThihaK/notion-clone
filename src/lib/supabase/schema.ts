import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),
  workspacesOwner: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  iconId: uuid("icon_id").notNull(),
  data: text("data"),
  inTrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
});