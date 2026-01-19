import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getChores = query({
  handler: async (ctx) => {
    return await ctx.db.query("chores").order("desc").collect();
  },
});

export const addChore = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("chores", {
      text: args.text,
      isCompleted: false,
    });
  },
});

export const toggleChore = mutation({
  args: { id: v.id("chores") },
  handler: async (ctx, args) => {
    const chore = await ctx.db.get(args.id);
    if (!chore) throw new ConvexError("Chore not found");

    await ctx.db.patch(args.id, {
      isCompleted: !chore.isCompleted,
    });
  },
});

export const updateChore = mutation({
  args: {
    id: v.id("chores"),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

export const deleteChore = mutation({
  args: { id: v.id("chores") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const clearAllChores = mutation({
  handler: async (ctx) => {
    const chores = await ctx.db.query("chores").collect();

    for (const chore of chores) {
      await ctx.db.delete(chore._id);
    }

    return { deletedCount: chores.length };
  },
});
