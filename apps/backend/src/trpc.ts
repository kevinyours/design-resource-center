import { initTRPC } from "@trpc/server";
import { Context } from "./contexts";

const t = initTRPC.context<Context>().create({});
