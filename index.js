var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/seed.ts
var seed_exports = {};
__export(seed_exports, {
  defaultServicePackages: () => defaultServicePackages
});
var defaultServicePackages;
var init_seed = __esm({
  "server/seed.ts"() {
    "use strict";
    defaultServicePackages = [
      // Tab 1: 8-9 STUDENTS
      {
        name: "Discover",
        description: "STANDARD",
        price: 55e4,
        // ₹5,500 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests",
          "1 career counselling session with Mentoria's expert career coaches",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts"
        ],
        excludedFeatures: [
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV building during internships/graduation"
        ],
        category: "8th-9th-students",
        isActive: true
      },
      {
        name: "Discover plus+",
        description: "PREMIUM",
        price: 15e5,
        // ₹15,000 in paise
        duration: "",
        features: [
          "Psychometric assessments to measure your interests, personality and abilities",
          "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV building during internships/graduation"
        ],
        excludedFeatures: [],
        category: "8th-9th-students",
        isActive: true
      },
      // Tab 2: 10-12 STUDENTS
      {
        name: "Achieve Online",
        description: "STANDARD",
        price: 599900,
        // ₹5,999 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excludedFeatures: [
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV reviews during internships/graduation"
        ],
        category: "10th-12th-students",
        isActive: true
      },
      {
        name: "Achieve Plus+",
        description: "PREMIUM",
        price: 1059900,
        // ₹10,599 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "4 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV reviews during internships/graduation"
        ],
        excludedFeatures: [],
        category: "10th-12th-students",
        isActive: true
      },
      // Tab 3: COLLEGE GRADUATES
      {
        name: "Ascend Online",
        description: "STANDARD",
        price: 649900,
        // ₹6,499 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excludedFeatures: [
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        category: "college-graduates",
        isActive: true
      },
      {
        name: "Ascend Plus+",
        description: "PREMIUM",
        price: 1059900,
        // ₹10,599 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        excludedFeatures: [],
        category: "college-graduates",
        isActive: true
      },
      // Tab 4: WORKING PROFESSIONALS
      {
        name: "Ascend Online",
        description: "STANDARD",
        price: 649900,
        // ₹6,499 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excludedFeatures: [
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        category: "working-professionals",
        isActive: true
      },
      {
        name: "Ascend Plus+",
        description: "PREMIUM",
        price: 1059900,
        // ₹10,599 in paise
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        excludedFeatures: [],
        category: "working-professionals",
        isActive: true
      }
    ];
  }
});

// server/index.ts
import express2 from "express";
import session from "express-session";
import MemoryStore from "memorystore";
import bcrypt2 from "bcryptjs";

// server/routes.ts
import { createServer } from "http";
import rateLimit from "express-rate-limit";
import bcrypt from "bcryptjs";
import Razorpay from "razorpay";
import crypto from "crypto";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blogPosts: () => blogPosts,
  contacts: () => contacts,
  events: () => events,
  insertBlogPostSchema: () => insertBlogPostSchema,
  insertContactSchema: () => insertContactSchema,
  insertEventSchema: () => insertEventSchema,
  insertPageViewSchema: () => insertPageViewSchema,
  insertPaymentSchema: () => insertPaymentSchema,
  insertServicePackageSchema: () => insertServicePackageSchema,
  insertSessionSchema: () => insertSessionSchema,
  insertTestimonialSchema: () => insertTestimonialSchema,
  insertUserSchema: () => insertUserSchema,
  pageViews: () => pageViews,
  payments: () => payments,
  servicePackages: () => servicePackages,
  sessions: () => sessions,
  testimonials: () => testimonials,
  users: () => users
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, json, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull().default("draft"),
  // draft, published
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5),
  imageUrl: text("image_url"),
  status: text("status").notNull().default("pending"),
  // pending, approved, rejected
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  // new, responded, closed
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var servicePackages = pgTable("service_packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  // Price in cents
  duration: text("duration"),
  // e.g., "1 hour", "3 sessions", "monthly"
  features: text("features").array().notNull().default([]),
  // Array of included features
  excludedFeatures: text("excluded_features").array().notNull().default([]),
  // Array of features NOT included
  category: text("category").notNull(),
  // career-counseling, workshops, assessments, etc.
  isActive: boolean("is_active").notNull().default(true),
  deletedAt: timestamp("deleted_at"),
  // Soft delete timestamp
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  contactId: varchar("contact_id").references(() => contacts.id),
  packageId: varchar("package_id").references(() => servicePackages.id),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  amount: integer("amount").notNull(),
  // Amount in cents
  currency: text("currency").notNull().default("usd"),
  status: text("status").notNull().default("pending"),
  // pending, completed, failed, refunded
  paymentMethod: text("payment_method"),
  // card, bank_transfer, etc.
  transactionId: text("transaction_id"),
  // Stripe payment intent ID or similar
  stripeSessionId: text("stripe_session_id"),
  // Stripe checkout session ID
  metadata: json("metadata"),
  // Additional payment data
  paidAt: timestamp("paid_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var sessions = pgTable("sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull().unique(),
  // Client-generated session ID
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  country: text("country"),
  city: text("city"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  deviceType: text("device_type"),
  // mobile, tablet, desktop
  browserName: text("browser_name"),
  osName: text("os_name"),
  startedAt: timestamp("started_at").defaultNow().notNull(),
  lastActivityAt: timestamp("last_activity_at").defaultNow().notNull(),
  duration: integer("duration").default(0),
  // in seconds
  pageViews: integer("page_views").default(1),
  isBot: boolean("is_bot").default(false)
}, (table) => ({
  sessionIdIdx: index("sessions_session_id_idx").on(table.sessionId),
  startedAtIdx: index("sessions_started_at_idx").on(table.startedAt),
  deviceTypeIdx: index("sessions_device_type_idx").on(table.deviceType)
}));
var pageViews = pgTable("page_views", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  path: text("path").notNull(),
  title: text("title"),
  timeOnPage: integer("time_on_page").default(0),
  // in seconds
  scrollDepth: integer("scroll_depth").default(0),
  // percentage
  exitPage: boolean("exit_page").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull()
}, (table) => ({
  sessionIdIdx: index("pageviews_session_id_idx").on(table.sessionId),
  pathIdx: index("pageviews_path_idx").on(table.path),
  createdAtIdx: index("pageviews_created_at_idx").on(table.createdAt)
}));
var events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  eventType: text("event_type").notNull(),
  // form_submit, button_click, file_download, etc.
  eventName: text("event_name").notNull(),
  path: text("path").notNull(),
  metadata: json("metadata"),
  // Additional event data
  value: integer("value").default(0),
  // For conversion value tracking
  createdAt: timestamp("created_at").defaultNow().notNull()
}, (table) => ({
  sessionIdIdx: index("events_session_id_idx").on(table.sessionId),
  eventTypeIdx: index("events_event_type_idx").on(table.eventType),
  createdAtIdx: index("events_created_at_idx").on(table.createdAt)
}));
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
  status: true
});
var insertServicePackageSchema = createInsertSchema(servicePackages).omit({
  id: true,
  deletedAt: true,
  createdAt: true,
  updatedAt: true
});
var insertPaymentSchema = createInsertSchema(payments).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertSessionSchema = createInsertSchema(sessions).omit({
  id: true,
  startedAt: true,
  lastActivityAt: true
});
var insertPageViewSchema = createInsertSchema(pageViews).omit({
  id: true,
  createdAt: true
});
var insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, desc, gte, count, sql as sql2, isNull, and } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  // Blog posts
  async getAllBlogPosts() {
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }
  async getPublishedBlogPosts() {
    return await db.select().from(blogPosts).where(eq(blogPosts.status, "published")).orderBy(desc(blogPosts.createdAt));
  }
  async getBlogPost(id) {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || void 0;
  }
  async createBlogPost(post) {
    const [created] = await db.insert(blogPosts).values(post).returning();
    return created;
  }
  async updateBlogPost(id, post) {
    const [updated] = await db.update(blogPosts).set({ ...post, updatedAt: /* @__PURE__ */ new Date() }).where(eq(blogPosts.id, id)).returning();
    return updated || void 0;
  }
  async deleteBlogPost(id) {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return (result.rowCount ?? 0) > 0;
  }
  // Testimonials
  async getAllTestimonials() {
    return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
  }
  async getApprovedTestimonials() {
    return await db.select().from(testimonials).where(eq(testimonials.status, "approved")).orderBy(desc(testimonials.createdAt));
  }
  async getTestimonial(id) {
    const [testimonial] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return testimonial || void 0;
  }
  async createTestimonial(testimonial) {
    const [created] = await db.insert(testimonials).values(testimonial).returning();
    return created;
  }
  async updateTestimonial(id, testimonial) {
    const [updated] = await db.update(testimonials).set(testimonial).where(eq(testimonials.id, id)).returning();
    return updated || void 0;
  }
  async deleteTestimonial(id) {
    const result = await db.delete(testimonials).where(eq(testimonials.id, id));
    return (result.rowCount ?? 0) > 0;
  }
  // Contacts
  async getAllContacts() {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }
  async getContact(id) {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact || void 0;
  }
  async createContact(contact) {
    const [created] = await db.insert(contacts).values(contact).returning();
    return created;
  }
  async updateContactStatus(id, status) {
    const [updated] = await db.update(contacts).set({ status }).where(eq(contacts.id, id)).returning();
    return updated || void 0;
  }
  async deleteContact(id) {
    const result = await db.delete(contacts).where(eq(contacts.id, id));
    return (result.rowCount ?? 0) > 0;
  }
  // Service packages
  async getAllServicePackages() {
    return await db.select().from(servicePackages).where(isNull(servicePackages.deletedAt)).orderBy(desc(servicePackages.createdAt));
  }
  async getActiveServicePackages() {
    return await db.select().from(servicePackages).where(and(
      eq(servicePackages.isActive, true),
      isNull(servicePackages.deletedAt)
    )).orderBy(desc(servicePackages.createdAt));
  }
  async getServicePackage(id) {
    const [servicePackage] = await db.select().from(servicePackages).where(eq(servicePackages.id, id));
    return servicePackage || void 0;
  }
  async createServicePackage(servicePackage) {
    const [created] = await db.insert(servicePackages).values(servicePackage).returning();
    return created;
  }
  async updateServicePackage(id, servicePackage) {
    const [updated] = await db.update(servicePackages).set({ ...servicePackage, updatedAt: /* @__PURE__ */ new Date() }).where(eq(servicePackages.id, id)).returning();
    return updated || void 0;
  }
  async deleteServicePackage(id) {
    const [updated] = await db.update(servicePackages).set({ deletedAt: /* @__PURE__ */ new Date() }).where(eq(servicePackages.id, id)).returning();
    return !!updated;
  }
  async seedServicePackages() {
    const { defaultServicePackages: defaultServicePackages2 } = await Promise.resolve().then(() => (init_seed(), seed_exports));
    let created = 0;
    let skipped = 0;
    for (const packageData of defaultServicePackages2) {
      const [existing] = await db.select().from(servicePackages).where(eq(servicePackages.name, packageData.name)).limit(1);
      if (existing) {
        skipped++;
      } else {
        await db.insert(servicePackages).values(packageData);
        created++;
      }
    }
    return { created, skipped };
  }
  async reseedServicePackages() {
    const deleted = await db.delete(servicePackages);
    const deletedCount = deleted.rowCount ?? 0;
    const { defaultServicePackages: defaultServicePackages2 } = await Promise.resolve().then(() => (init_seed(), seed_exports));
    await db.insert(servicePackages).values(defaultServicePackages2);
    return { deleted: deletedCount, created: defaultServicePackages2.length };
  }
  // Payments
  async getAllPayments() {
    return await db.select().from(payments).orderBy(desc(payments.createdAt));
  }
  async getPayment(id) {
    const [payment] = await db.select().from(payments).where(eq(payments.id, id));
    return payment || void 0;
  }
  async getPaymentsByStatus(status) {
    return await db.select().from(payments).where(eq(payments.status, status)).orderBy(desc(payments.createdAt));
  }
  async getPaymentsByCustomer(customerEmail) {
    return await db.select().from(payments).where(eq(payments.customerEmail, customerEmail)).orderBy(desc(payments.createdAt));
  }
  async createPayment(payment) {
    const [created] = await db.insert(payments).values(payment).returning();
    return created;
  }
  async updatePayment(id, payment) {
    const [updated] = await db.update(payments).set({ ...payment, updatedAt: /* @__PURE__ */ new Date() }).where(eq(payments.id, id)).returning();
    return updated || void 0;
  }
  async deletePayment(id) {
    const result = await db.delete(payments).where(eq(payments.id, id));
    return (result.rowCount ?? 0) > 0;
  }
  // Analytics methods
  async createSession(session2) {
    const [created] = await db.insert(sessions).values(session2).returning();
    return created;
  }
  async updateSession(sessionId, updates) {
    const [updated] = await db.update(sessions).set({ ...updates, lastActivityAt: /* @__PURE__ */ new Date() }).where(eq(sessions.sessionId, sessionId)).returning();
    return updated || void 0;
  }
  async getSession(sessionId) {
    const [session2] = await db.select().from(sessions).where(eq(sessions.sessionId, sessionId));
    return session2 || void 0;
  }
  async createPageView(pageView) {
    const [created] = await db.insert(pageViews).values(pageView).returning();
    return created;
  }
  async createEvent(event) {
    const [created] = await db.insert(events).values(event).returning();
    return created;
  }
  async getAnalyticsSummary(startDate, endDate) {
    let dateFilter;
    if (startDate && endDate) {
      dateFilter = sql2`${sessions.startedAt} BETWEEN ${startDate.toISOString()} AND ${endDate.toISOString()}`;
    } else if (startDate) {
      dateFilter = gte(sessions.startedAt, startDate);
    }
    const [sessionStats] = await db.select({
      totalSessions: count(sessions.id),
      avgDuration: sql2`COALESCE(AVG(${sessions.duration}), 0)`
    }).from(sessions).where(dateFilter);
    const [pageViewStats] = await db.select({
      totalPageViews: count(pageViews.id)
    }).from(pageViews).leftJoin(sessions, eq(pageViews.sessionId, sessions.sessionId)).where(dateFilter ? sql2`${sessions.startedAt} BETWEEN ${startDate?.toISOString()} AND ${endDate?.toISOString() || "NOW"}` : void 0);
    const [eventStats] = await db.select({
      totalEvents: count(events.id)
    }).from(events).leftJoin(sessions, eq(events.sessionId, sessions.sessionId)).where(dateFilter ? sql2`${sessions.startedAt} BETWEEN ${startDate?.toISOString()} AND ${endDate?.toISOString() || "NOW"}` : void 0);
    const topPages = await db.select({
      path: pageViews.path,
      views: count(pageViews.id)
    }).from(pageViews).leftJoin(sessions, eq(pageViews.sessionId, sessions.sessionId)).where(dateFilter ? sql2`${sessions.startedAt} BETWEEN ${startDate?.toISOString()} AND ${endDate?.toISOString() || "NOW"}` : void 0).groupBy(pageViews.path).orderBy(desc(count(pageViews.id))).limit(10);
    const topReferrers = await db.select({
      referrer: sessions.referrer,
      sessions: count(sessions.id)
    }).from(sessions).where(dateFilter ? sql2`${sessions.referrer} IS NOT NULL AND ${sessions.referrer} != '' AND ${sessions.startedAt} BETWEEN ${startDate?.toISOString()} AND ${endDate?.toISOString() || "NOW"}` : sql2`${sessions.referrer} IS NOT NULL AND ${sessions.referrer} != ''`).groupBy(sessions.referrer).orderBy(desc(count(sessions.id))).limit(10);
    const deviceBreakdown = await db.select({
      deviceType: sessions.deviceType,
      count: count(sessions.id)
    }).from(sessions).where(dateFilter ? sql2`${sessions.deviceType} IS NOT NULL AND ${sessions.startedAt} BETWEEN ${startDate?.toISOString()} AND ${endDate?.toISOString() || "NOW"}` : sql2`${sessions.deviceType} IS NOT NULL`).groupBy(sessions.deviceType).orderBy(desc(count(sessions.id)));
    return {
      totalSessions: Number(sessionStats.totalSessions) || 0,
      totalPageViews: Number(pageViewStats.totalPageViews) || 0,
      totalEvents: Number(eventStats.totalEvents) || 0,
      avgSessionDuration: Number(sessionStats.avgDuration) || 0,
      topPages: topPages.map((p) => ({
        path: p.path,
        views: Number(p.views)
      })),
      topReferrers: topReferrers.filter((r) => r.referrer).map((r) => ({
        referrer: r.referrer,
        sessions: Number(r.sessions)
      })),
      deviceBreakdown: deviceBreakdown.filter((d) => d.deviceType).map((d) => ({
        deviceType: d.deviceType,
        count: Number(d.count)
      }))
    };
  }
  async getSessionsWithMetrics(limit = 100, offset = 0) {
    return await db.select().from(sessions).orderBy(desc(sessions.startedAt)).limit(limit).offset(offset);
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
import { z } from "zod";
function requireAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: "Authentication required" });
  }
}
async function registerRoutes(app2) {
  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    max: 5,
    // Limit to 5 attempts per window per IP
    message: { error: "Too many authentication attempts. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false
  });
  const adminCreationLimiter = rateLimit({
    windowMs: 60 * 60 * 1e3,
    // 1 hour
    max: 1,
    // Only 1 admin creation attempt per hour per IP
    message: { error: "Too many admin creation attempts. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false
  });
  const paymentLimiter = rateLimit({
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    max: 10,
    // Limit to 10 payment attempts per window per IP
    message: { error: "Too many payment attempts. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false
  });
  app2.post("/api/auth/login", authLimiter, async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const user = await storage.getUserByUsername(validatedData.username);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const isValid = await bcrypt.compare(validatedData.password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      req.session.regenerate((err) => {
        if (err) {
          console.error("Session regeneration error:", err);
          return res.status(500).json({ error: "Internal server error" });
        }
        req.session.userId = user.id;
        req.session.username = user.username;
        res.json({ message: "Login successful", username: user.username });
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid login data", details: error.errors });
      }
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.clearCookie("aakaar.sid");
      res.json({ message: "Logout successful" });
    });
  });
  app2.get("/api/auth/me", (req, res) => {
    if (req.session.userId) {
      res.json({
        authenticated: true,
        username: req.session.username
      });
    } else {
      res.json({ authenticated: false });
    }
  });
  app2.post("/api/auth/create-admin", adminCreationLimiter, async (req, res) => {
    try {
      const setupToken = req.headers["x-setup-token"];
      if (!setupToken || setupToken !== process.env.INIT_ADMIN_TOKEN) {
        return res.status(403).json({
          error: "Invalid or missing setup token. This endpoint requires proper authorization."
        });
      }
      const validatedData = insertUserSchema.parse(req.body);
      const existingUsers = await db.select().from(users).limit(1);
      if (existingUsers.length > 0) {
        return res.status(403).json({
          error: "Admin user already exists. This endpoint is only available during initial setup."
        });
      }
      const hashedPassword = await bcrypt.hash(validatedData.password, 12);
      const user = await storage.createUser({
        username: validatedData.username,
        password: hashedPassword
      });
      res.status(201).json({
        message: "Admin user created successfully",
        username: user.username
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid user data", details: error.errors });
      }
      console.error("Create admin error:", error);
      res.status(500).json({ error: "Failed to create admin user" });
    }
  });
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });
  app2.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getApprovedTestimonials();
      res.json(testimonials2);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });
  app2.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      console.log("New contact form submission:", contact);
      res.status(201).json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid form data", details: error.errors });
      }
      console.error("Error submitting contact form:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });
  app2.get("/api/admin/blog-posts", requireAuth, async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching admin blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });
  app2.post("/api/admin/blog-posts", requireAuth, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid blog post data", details: error.errors });
      }
      console.error("Error creating blog post:", error);
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });
  app2.put("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(req.params.id, validatedData);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid blog post data", details: error.errors });
      }
      console.error("Error updating blog post:", error);
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });
  app2.delete("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteBlogPost(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json({ message: "Blog post deleted successfully" });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });
  app2.get("/api/admin/testimonials", requireAuth, async (req, res) => {
    try {
      const testimonials2 = await storage.getAllTestimonials();
      res.json(testimonials2);
    } catch (error) {
      console.error("Error fetching admin testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });
  app2.post("/api/admin/testimonials", requireAuth, async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid testimonial data", details: error.errors });
      }
      console.error("Error creating testimonial:", error);
      res.status(500).json({ error: "Failed to create testimonial" });
    }
  });
  app2.put("/api/admin/testimonials/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.partial().parse(req.body);
      const testimonial = await storage.updateTestimonial(req.params.id, validatedData);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid testimonial data", details: error.errors });
      }
      console.error("Error updating testimonial:", error);
      res.status(500).json({ error: "Failed to update testimonial" });
    }
  });
  app2.delete("/api/admin/testimonials/:id", requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteTestimonial(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({ error: "Failed to delete testimonial" });
    }
  });
  app2.get("/api/admin/contacts", requireAuth, async (req, res) => {
    try {
      const contacts2 = await storage.getAllContacts();
      res.json(contacts2);
    } catch (error) {
      console.error("Error fetching admin contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });
  app2.put("/api/admin/contacts/:id/status", requireAuth, async (req, res) => {
    try {
      const { status } = req.body;
      const contact = await storage.updateContactStatus(req.params.id, status);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json(contact);
    } catch (error) {
      console.error("Error updating contact status:", error);
      res.status(500).json({ error: "Failed to update contact status" });
    }
  });
  app2.get("/api/admin/service-packages", requireAuth, async (req, res) => {
    try {
      const packages = await storage.getAllServicePackages();
      res.json(packages);
    } catch (error) {
      console.error("Error fetching admin service packages:", error);
      res.status(500).json({ error: "Failed to fetch service packages" });
    }
  });
  app2.post("/api/admin/service-packages", requireAuth, async (req, res) => {
    try {
      const validatedData = insertServicePackageSchema.parse(req.body);
      const servicePackage = await storage.createServicePackage(validatedData);
      res.status(201).json(servicePackage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid service package data", details: error.errors });
      }
      console.error("Error creating service package:", error);
      res.status(500).json({ error: "Failed to create service package" });
    }
  });
  app2.put("/api/admin/service-packages/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertServicePackageSchema.partial().parse(req.body);
      const servicePackage = await storage.updateServicePackage(req.params.id, validatedData);
      if (!servicePackage) {
        return res.status(404).json({ error: "Service package not found" });
      }
      res.json(servicePackage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid service package data", details: error.errors });
      }
      console.error("Error updating service package:", error);
      res.status(500).json({ error: "Failed to update service package" });
    }
  });
  app2.delete("/api/admin/service-packages/:id", requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteServicePackage(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Service package not found" });
      }
      res.json({ message: "Service package deleted successfully" });
    } catch (error) {
      console.error("Error deleting service package:", error);
      res.status(500).json({ error: "Failed to delete service package" });
    }
  });
  app2.post("/api/admin/service-packages/seed", requireAuth, async (req, res) => {
    try {
      const result = await storage.seedServicePackages();
      res.json({
        message: `Seed completed: ${result.created} packages created, ${result.skipped} already existed`,
        ...result
      });
    } catch (error) {
      console.error("Error seeding service packages:", error);
      res.status(500).json({ error: "Failed to seed service packages" });
    }
  });
  app2.post("/api/admin/service-packages/reseed", requireAuth, async (req, res) => {
    try {
      const result = await storage.reseedServicePackages();
      res.json({
        message: `Reseed completed: ${result.deleted} packages deleted, ${result.created} packages created`,
        ...result
      });
    } catch (error) {
      console.error("Error reseeding service packages:", error);
      res.status(500).json({ error: "Failed to reseed service packages" });
    }
  });
  app2.get("/api/admin/payments", requireAuth, async (req, res) => {
    try {
      const payments2 = await storage.getAllPayments();
      res.json(payments2);
    } catch (error) {
      console.error("Error fetching admin payments:", error);
      res.status(500).json({ error: "Failed to fetch payments" });
    }
  });
  app2.get("/api/admin/payments/status/:status", requireAuth, async (req, res) => {
    try {
      const payments2 = await storage.getPaymentsByStatus(req.params.status);
      res.json(payments2);
    } catch (error) {
      console.error("Error fetching payments by status:", error);
      res.status(500).json({ error: "Failed to fetch payments" });
    }
  });
  app2.post("/api/admin/payments", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPaymentSchema.parse(req.body);
      const payment = await storage.createPayment(validatedData);
      res.status(201).json(payment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid payment data", details: error.errors });
      }
      console.error("Error creating payment:", error);
      res.status(500).json({ error: "Failed to create payment" });
    }
  });
  app2.put("/api/admin/payments/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPaymentSchema.partial().parse(req.body);
      const payment = await storage.updatePayment(req.params.id, validatedData);
      if (!payment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(payment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid payment data", details: error.errors });
      }
      console.error("Error updating payment:", error);
      res.status(500).json({ error: "Failed to update payment" });
    }
  });
  app2.get("/api/service-packages", async (req, res) => {
    try {
      const packages = await storage.getActiveServicePackages();
      res.json(packages);
    } catch (error) {
      console.error("Error fetching service packages:", error);
      res.status(500).json({ error: "Failed to fetch service packages" });
    }
  });
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
  let razorpay = null;
  if (razorpayKeyId && razorpayKeySecret) {
    razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret
    });
  } else {
    console.warn("\u26A0\uFE0F  Razorpay credentials not found. Payment features will be disabled.");
  }
  app2.post("/api/payments/create-order", paymentLimiter, async (req, res) => {
    try {
      if (!razorpay) {
        return res.status(503).json({ error: "Payment service is not configured" });
      }
      const { packageId, customerName, customerEmail, customerPhone } = req.body;
      if (!packageId || !customerName || !customerEmail || !customerPhone) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const cleanPhone = customerPhone.replace(/[\s\-\(\)]/g, "").replace(/^\+91/, "");
      if (!/^\d{10}$/.test(cleanPhone)) {
        return res.status(400).json({ error: "Invalid phone number" });
      }
      const servicePackage = await storage.getServicePackage(packageId);
      if (!servicePackage) {
        return res.status(404).json({ error: "Service package not found" });
      }
      if (!servicePackage.isActive) {
        return res.status(400).json({ error: "Service package is not available" });
      }
      const amount = servicePackage.price;
      console.log(`Creating Razorpay order for package: ${servicePackage.name}, price: ${amount} paise (\u20B9${amount / 100})`);
      const options = {
        amount,
        currency: "INR",
        receipt: `order_${Date.now()}`,
        payment_capture: 1
      };
      const order = await razorpay.orders.create(options);
      console.log(`Razorpay order created: ${order.id}, amount: ${order.amount} paise (\u20B9${order.amount / 100})`);
      const payment = await storage.createPayment({
        transactionId: order.id,
        customerName,
        customerEmail,
        amount,
        status: "pending",
        packageId,
        currency: "INR",
        metadata: JSON.stringify({
          orderId: order.id,
          customerPhone,
          packageName: servicePackage.name
        })
      });
      res.json({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        paymentId: payment.id
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });
  app2.post("/api/payments/verify", paymentLimiter, async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentId } = req.body;
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !paymentId) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const payment = await storage.getPayment(paymentId);
      if (!payment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      if (payment.status === "completed") {
        return res.json({
          message: "Payment already verified",
          payment
        });
      }
      if (payment.transactionId !== razorpay_order_id) {
        return res.status(400).json({ error: "Payment order mismatch" });
      }
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "").update(sign.toString()).digest("hex");
      if (razorpay_signature === expectedSign) {
        let existingMetadata = {};
        try {
          existingMetadata = payment.metadata ? JSON.parse(payment.metadata) : {};
        } catch (e) {
          existingMetadata = {};
        }
        const updatedPayment = await storage.updatePayment(paymentId, {
          status: "completed",
          paymentMethod: "razorpay",
          paidAt: /* @__PURE__ */ new Date(),
          metadata: JSON.stringify({
            ...existingMetadata,
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            verifiedAt: (/* @__PURE__ */ new Date()).toISOString()
          })
        });
        res.json({
          message: "Payment verified successfully",
          payment: updatedPayment
        });
      } else {
        await storage.updatePayment(paymentId, {
          status: "failed",
          metadata: JSON.stringify({
            error: "Invalid signature",
            attemptedAt: (/* @__PURE__ */ new Date()).toISOString(),
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id
          })
        });
        res.status(400).json({ error: "Invalid signature" });
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ error: "Failed to verify payment" });
    }
  });
  app2.post("/api/analytics/session", async (req, res) => {
    try {
      const validatedData = insertSessionSchema.parse(req.body);
      const existingSession = await storage.getSession(validatedData.sessionId);
      if (existingSession) {
        const isPageViewUpdate = !validatedData.duration || validatedData.duration === 0;
        const updated = await storage.updateSession(validatedData.sessionId, {
          pageViews: isPageViewUpdate ? (existingSession.pageViews || 0) + 1 : existingSession.pageViews,
          duration: validatedData.duration || existingSession.duration
        });
        return res.json(updated);
      }
      const session2 = await storage.createSession(validatedData);
      res.status(201).json(session2);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid session data", details: error.errors });
      }
      console.error("Analytics session error:", error);
      res.status(500).json({ error: "Failed to track session" });
    }
  });
  app2.post("/api/analytics/pageview", async (req, res) => {
    try {
      const validatedData = insertPageViewSchema.parse(req.body);
      const pageView = await storage.createPageView(validatedData);
      res.status(201).json(pageView);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid page view data", details: error.errors });
      }
      console.error("Analytics pageview error:", error);
      res.status(500).json({ error: "Failed to track page view" });
    }
  });
  app2.post("/api/analytics/event", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid event data", details: error.errors });
      }
      console.error("Analytics event error:", error);
      res.status(500).json({ error: "Failed to track event" });
    }
  });
  app2.get("/api/admin/analytics/summary", requireAuth, async (req, res) => {
    try {
      const { startDate, endDate } = req.query;
      const start = startDate ? new Date(startDate) : void 0;
      const end = endDate ? new Date(endDate) : void 0;
      const summary = await storage.getAnalyticsSummary(start, end);
      res.json(summary);
    } catch (error) {
      console.error("Analytics summary error:", error);
      res.status(500).json({ error: "Failed to fetch analytics summary" });
    }
  });
  app2.get("/api/admin/analytics/sessions", requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 100;
      const offset = parseInt(req.query.offset) || 0;
      const sessions2 = await storage.getSessionsWithMetrics(limit, offset);
      res.json(sessions2);
    } catch (error) {
      console.error("Analytics sessions error:", error);
      res.status(500).json({ error: "Failed to fetch sessions" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET environment variable is required for security");
}
var MemStore = MemoryStore(session);
var isProduction = process.env.NODE_ENV === "production";
app.use(session({
  store: new MemStore({
    checkPeriod: 864e5
    // Prune expired entries every 24h
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: "aakaar.sid",
  // Custom session name for security
  cookie: {
    secure: isProduction,
    // HTTPS only in production
    httpOnly: true,
    // Prevent XSS
    sameSite: "lax",
    // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1e3
    // 7 days (shorter for security)
  }
}));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function initializeDefaultAdmin() {
  try {
    const existingUsers = await db.select().from(users).limit(1);
    if (existingUsers.length === 0) {
      const adminUsername = process.env.ADMIN_USERNAME;
      const adminPassword = process.env.ADMIN_PASSWORD;
      if (!adminUsername || !adminPassword) {
        throw new Error(
          "ADMIN_USERNAME and ADMIN_PASSWORD environment variables are required for initial admin account creation. Please set these secrets in your Replit deployment configuration."
        );
      }
      const hashedPassword = await bcrypt2.hash(adminPassword, 12);
      await storage.createUser({
        username: adminUsername,
        password: hashedPassword
      });
      log(`Default admin user created: ${adminUsername}`);
    }
  } catch (error) {
    console.error("Error initializing default admin:", error);
    throw error;
  }
}
(async () => {
  const server = await registerRoutes(app);
  await initializeDefaultAdmin();
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
