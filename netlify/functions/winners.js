export async function handler() {
  const winners = [
    { id: 1201, name: "Ava", location: "Berlin", date: "2025-09-21" },
    { id: 1202, name: "Kai", location: "Prague", date: "2025-09-21" },
    { id: 1203, name: "Oliver", location: "London", date: "2025-09-22" },
    { id: 1204, name: "Bence", location: "Budapest", date: "2025-09-22" }
  ];
  return { statusCode: 200, body: JSON.stringify(winners) };
}
