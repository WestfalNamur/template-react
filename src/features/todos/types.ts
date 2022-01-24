export type Person = {
  name: string;
  height: number;
  mass: number;
};

export type People = {
  count: number;
  results: Person[];
};

export function isPerson(person: Person): boolean {
  if (typeof person.name !== "string") {
    return false;
  }
  if (typeof person.height !== "string") {
    return false;
  }
  if (typeof person.mass !== "string") {
    return false;
  }
  return true;
}

export function isPeople(people: People): boolean {
  if (typeof people.count !== "number") {
    return false;
  }
  if (!people.results.every((p) => isPerson(p))) {
    return false;
  }
  return true;
}
