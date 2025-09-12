import postgres from "postgres";

let dbSql: ReturnType<typeof postgres>;

declare global {
  // Evita erro de redeclaração quando o Next recarrega no dev
  // eslint-disable-next-line no-var
  var _dbSql: ReturnType<typeof postgres> | undefined;
}

if (!global._dbSql) {
  global._dbSql = postgres(process.env.POSTGRES_URL!, {
    ssl: false, // como estás local, deixa false
  });
}

dbSql = global._dbSql;

export default dbSql;
