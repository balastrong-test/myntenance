import { Database, Tables } from "./types.gen";

export type Task = Tables<"tasks">;
export type TaskInsert = Database["public"]["Tables"]["tasks"]["Insert"];