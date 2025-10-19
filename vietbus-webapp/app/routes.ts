import {
    type RouteConfig,
    route,
    index
} from "@react-router/dev/routes";

export default [
    index("./routes/index.tsx"),
    route("taixe", "./routes/TaiXe.tsx")
] satisfies RouteConfig;