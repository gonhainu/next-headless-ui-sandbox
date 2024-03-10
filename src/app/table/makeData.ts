import { faker } from "@faker-js/faker";

export const makeColumns = (num: number) => {
  return [...Array(num)].map((_, i) => {
    return {
      accessorKey: i.toString(),
      header: "Column " + i.toString(),
      size: Math.floor(Math.random() * 150) + 100,
    };
  });
};

export const makeData = (num: number, columns) => {
  return [...Array(num)].map(() => ({
    ...Object.fromEntries(
      columns.map((col) => [col.accessorKey, faker.person.firstName()])
    ),
  }));
};

export type Person = ReturnType<typeof makeData>[0];
