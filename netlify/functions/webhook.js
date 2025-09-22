export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const payload = JSON.parse(event.body);
  const name = payload.from_name || "Anon";
  const date = new Date().toISOString().split("T")[0];

  console.log("Új vásárlás:", name, date);

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
}
