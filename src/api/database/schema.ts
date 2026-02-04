import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
export * from "./auth-schema";

export const donations = sqliteTable("donations", {
    id: text("id").primaryKey(),
    donorName: text("donor_name").notNull(),
    donorEmail: text("donor_email").notNull(),
    amount: real("amount").notNull(),
    currency: text("currency").notNull().default("GBP"),
    status: text("status").notNull(), // 'Completed', 'Pending', 'Failed'
    frequency: text("frequency").notNull(), // 'One-time', 'Monthly'
    date: integer("date", { mode: "timestamp" }).notNull(),
});

export const bookings = sqliteTable("bookings", {
    id: text("id").primaryKey(),
    userName: text("user_name").notNull(),
    userEmail: text("user_email").notNull(),
    serviceType: text("service_type").notNull(),
    bookingDate: integer("booking_date", { mode: "timestamp" }).notNull(),
    status: text("status").notNull(), // 'Confirmed', 'Pending', 'Cancelled'
});

export const articles = sqliteTable("articles", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    author: text("author").notNull(),
    description: text("description").notNull(),
    content: text("content").notNull(),
    image: text("image"),
    category: text("category"),
    status: text("status").notNull().default("Draft"), // 'Published', 'Draft'
    publishedAt: integer("published_at", { mode: "timestamp" }),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
