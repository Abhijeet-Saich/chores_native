import { defineSchema, defineTable} from 'convex/server';
import { v } from "convex/values";


export default defineSchema({
    chores : defineTable({
        text: v.string(),
        isCompleted : v.boolean(),
    }),
})


