export async function handler() {
  const winners = [
    { id: 1201, name: "Ava", location: "Berlin", date: "2025-09-21" },
    { id: 1202, name: "Kai", location: "Prága", date: "2025-09-21" }
  ];
  return { statusCode: 200, body: JSON.stringify(winners) };
}
